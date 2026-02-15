import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { ContactMethod } from '../types';

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "saranyapothina07@gmail.com",
    href: "mailto:saranyapothina07@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saranya-pothina-806670274",
    href: "https://linkedin.com/in/saranya-pothina-806670274"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8688161699",
    href: "tel:+918688161699"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saranyaaaa17",
    href: "https://github.com/saranyaaaa17"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Visakhapatnam, India",
    href: null
  }
];
