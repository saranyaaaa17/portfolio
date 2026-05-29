import { motion } from 'framer-motion';
import { SectionContainer, Button } from '../ui';
import { fadeInUp } from '../../utils/motion';
import { Mail } from 'lucide-react';

import { contactMethods } from '../../data/contact';

const Contact = () => {

  return (
    <SectionContainer id="contact" background="gray">
      

      {/* Quick Contact Form + Contact Methods Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Simple contact form that opens mail client (mailto) */}
        <div className="bg-black border border-neutral-800 rounded-2xl p-6">
          <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement & { name: any, email: any, phone: any, message: any };
            const name = encodeURIComponent(form.name.value || '');
            const email = encodeURIComponent(form.email.value || '');
            const phone = encodeURIComponent(form.phone.value || '');
            const message = encodeURIComponent(form.message.value || '');
            const subject = encodeURIComponent(`Website message from ${name || email}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
            window.location.href = `mailto:saranyapothina07@gmail.com?subject=${subject}&body=${body}`;
          }}>
            <div className="mb-3">
              <label className="text-xs text-gray-400">Name</label>
              <input name="name" className="w-full mt-1 p-3 rounded-md bg-white/3 border border-neutral-800 text-gray-100" placeholder="What's your name?" />
            </div>
            <div className="mb-3">
              <label className="text-xs text-gray-400">Email</label>
              <input name="email" type="email" className="w-full mt-1 p-3 rounded-md bg-white/3 border border-neutral-800 text-gray-100" placeholder="What's your email-id?" />
            </div>
            <div className="mb-3">
              <label className="text-xs text-gray-400">Phone</label>
              <input name="phone" className="w-full mt-1 p-3 rounded-md bg-white/3 border border-neutral-800 text-gray-100" placeholder="What's your phone number?" />
            </div>
            <div className="mb-4">
              <label className="text-xs text-gray-400">Message</label>
              <textarea name="message" rows={4} className="w-full mt-1 p-3 rounded-md bg-white/3 border border-neutral-800 text-gray-100" placeholder="What's your message to me?" />
            </div>
            <div className="text-right">
              <Button type="submit" variant="primary">Send</Button>
            </div>
          </form>
        </div>
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
        <div className="mt-4">
          <Button href="https://drive.google.com/file/d/1-eWDwEBZo7CmSrGOS8GKJifP0cWztGFr/view?usp=drive_link" variant="outline">Download CV</Button>
        </div>
      </motion.div>

    </SectionContainer>
  );
};

export default Contact;
