"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CelestialSphereProps {
  hue?: number;
  speed?: number;
  zoom?: number;
  particleSize?: number;
  className?: string;
}

export const CelestialSphere: React.FC<CelestialSphereProps> = ({
  hue = 200,
  speed = 0.3,
  zoom = 1.5,
  particleSize = 3,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let scene: THREE.Scene | undefined;
    let camera: THREE.OrthographicCamera | undefined;
    let renderer: THREE.WebGLRenderer | undefined;
    let material: THREE.ShaderMaterial | undefined;
    let mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial> | undefined;
    let animationFrameId = 0;
    const mouse = new THREE.Vector2(0.5, 0.5);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_hue;
      uniform float u_zoom;
      uniform float u_particle_size;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        uv *= u_zoom;

        vec2 mouseNormalized = u_mouse / u_resolution;
        uv += (mouseNormalized - 0.5) * 0.8;

        float f = fbm(uv + vec2(u_time * 0.1, u_time * 0.05));
        float t = fbm(uv + f + vec2(u_time * 0.05, u_time * 0.02));

        float nebula = pow(t, 2.0);
        vec3 shadow = vec3(0.07, 0.08, 0.1);
        vec3 silver = vec3(0.78, 0.8, 0.84);
        vec3 color = mix(shadow, silver, smoothstep(0.08, 0.95, nebula));
        color += vec3(0.12) * fbm(uv * 2.0 + u_time * 0.08);
        color *= 0.6 + nebula * 1.4;

        float starVal = random(vUv * 500.0);
        if (starVal > 0.998) {
          float starBrightness = (starVal - 0.998) / 0.002;
          color += vec3(starBrightness * u_particle_size);
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const resize = () => {
      if (!renderer || !material || !camera) return;
      const { clientWidth, clientHeight } = currentMount;
      renderer.setSize(clientWidth, clientHeight, false);
      material.uniforms.u_resolution.value.set(clientWidth, clientHeight);
      camera.updateProjectionMatrix();
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      if (material) {
        material.uniforms.u_mouse.value.set(mouse.x, currentMount.clientHeight - mouse.y);
      }
    };

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2() },
        u_hue: { value: hue },
        u_zoom: { value: zoom },
        u_particle_size: { value: particleSize },
      },
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    resize();

    const animate = () => {
      if (!scene || !camera || !renderer || !material) return;
      material.uniforms.u_time.value += 0.005 * speed;
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer?.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, [hue, speed, zoom, particleSize]);

  return <div ref={mountRef} className={className || 'h-full w-full'} />;
};

export default CelestialSphere;