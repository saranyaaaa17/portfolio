import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader, Button } from '../ui';
import { fadeInUp } from '../../utils/motion';
import { Mail } from 'lucide-react';

import { contactMethods } from '../../data/contact';

const Contact = () => {

  return (
    <SectionContainer id="contact" background="gray">
      
      <SectionHeader 
        label="Get In Touch"
        title="Let's Connect"
        subtitle="I'm currently open to internship and full-time opportunities. Feel free to reach out if you have any questions or just want to say hi."
      />

      {/* Contact Methods Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const content = (
            <div className="flex items-start gap-4 p-6 rounded-xl border border-neutral-800 bg-black shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {method.label}
                </div>
                <div className="text-base font-medium text-gray-100 truncate">
                  {method.value}
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              {method.href ? (
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.5 }}
        className="text-center pt-8 border-t border-neutral-800"
      >
        <p className="text-sm md:text-base text-gray-200 mb-6">
          Prefer email? Send me a message directly:
        </p>
        <Button 
          href="mailto:saranyapothina07@gmail.com"
          variant="primary"
          icon={Mail}
          iconPosition="left"
        >
          Send Email
        </Button>
      </motion.div>

    </SectionContainer>
  );
};

export default Contact;
