import { useEffect, useRef } from 'react';

const vertexSource = `#version 300 es
precision highp float;
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentSource = `#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 resolution;
uniform float time;
uniform vec2 pointer;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = m * p;
    amplitude *= 0.5;
  }
  return value;
}

vec2 rotate(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c) * p;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 center = vec2(0.5);
  vec2 p = uv - center;
  p.x *= resolution.x / resolution.y;

  vec2 pointerOffset = (pointer / resolution.xy) - center;
  pointerOffset.x *= resolution.x / resolution.y;

  float t = time * 0.08;
  vec2 q = p;
  q = rotate(q, sin(t * 0.35) * 0.15 + p.x * 0.06);

  vec2 warp = vec2(
    fbm(q * 2.0 + vec2(t * 0.8, -t * 0.45)),
    fbm(q * 2.0 - vec2(t * 0.6, t * 0.75))
  );
  q += (warp - 0.5) * 0.9;

  vec2 flow = vec2(
    fbm(q * 3.2 + vec2(0.0, t * 1.2)),
    fbm(q * 3.2 + vec2(t * 0.95, 0.0))
  ) - 0.5;
  q += flow * 1.35;

  vec2 cursor = pointerOffset * 0.9;
  float cursorGlow = exp(-10.5 * length(q - cursor));

  float bands = fbm(q * 2.4 + vec2(t * 1.5, -t * 0.8));
  float veils = fbm(q * 5.4 - vec2(t * 0.5, t * 0.36));
  float filaments = smoothstep(0.72, 0.98, abs(sin((q.x + bands * 0.8) * 7.0 + t * 3.6)));
  filaments *= smoothstep(0.95, 0.18, abs(q.y + 0.12 * sin(q.x * 2.8 + t * 1.4)));

  float orb1 = exp(-2.2 * length(q - vec2(-0.44 + sin(t * 0.9) * 0.18, -0.18 + cos(t * 0.6) * 0.10)));
  float orb2 = exp(-2.6 * length(q - vec2(0.46 + cos(t * 0.75) * 0.16, 0.22 + sin(t * 0.55) * 0.10)));
  float orb3 = exp(-3.8 * length(q - cursor * 0.6));

  float streaks = exp(-abs(q.y + sin(q.x * 2.4 + t * 4.0) * 0.10) * 10.0);
  streaks += exp(-abs(q.y - 0.15 + cos(q.x * 3.1 - t * 2.8) * 0.08) * 12.0) * 0.55;

  vec3 bg = vec3(0.01, 0.01, 0.015);
  vec3 blue = vec3(0.26, 0.52, 0.96);
  vec3 red = vec3(0.91, 0.29, 0.21);
  vec3 yellow = vec3(0.97, 0.74, 0.15);
  vec3 green = vec3(0.20, 0.68, 0.34);

  vec3 color = bg;
  color += blue * orb1 * 0.45;
  color += red * orb2 * 0.34;
  color += yellow * (bands * 0.20 + orb3 * 0.60 + streaks * 0.18 + cursorGlow * 0.42);
  color += green * veils * 0.18;
  color += vec3(1.0, 0.78, 0.28) * filaments * 0.08;

  float ring = smoothstep(0.9, 0.18, abs(length(q) - 0.58));
  color += vec3(0.96, 0.67, 0.16) * ring * 0.05;

  float vignette = smoothstep(1.22, 0.08, length(p));
  float grain = noise(uv * resolution.xy * 0.52 + t * 18.0) * 0.018;
  color += grain;
  color *= vignette;
  color = mix(vec3(0.0), color, 0.98);

  outColor = vec4(color, 1.0);
}`;

const compileShader = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

const AnimatedShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef([0, 0]);
  const targetRef = useRef([0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: true });
    if (!gl) return;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    if (!vao || !buffer) return;

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const timeLocation = gl.getUniformLocation(program, 'time');
    const pointerLocation = gl.getUniformLocation(program, 'pointer');

    const resize = () => {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetRef.current = [event.clientX, window.innerHeight - event.clientY];
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);

    const render = (time: number) => {
      pointerRef.current[0] += (targetRef.current[0] - pointerRef.current[0]) * 0.08;
      pointerRef.current[1] += (targetRef.current[1] - pointerRef.current[1]) * 0.08;

      gl.useProgram(program);
      gl.bindVertexArray(vao);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(pointerLocation, pointerRef.current[0] || canvas.width * 0.5, pointerRef.current[1] || canvas.height * 0.5);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" style={{ background: '#050505' }} />;
};

export default AnimatedShaderBackground;
