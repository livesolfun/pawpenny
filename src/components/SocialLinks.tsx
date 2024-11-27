import React from 'react';
import { Twitter, MessageCircle, Send, Instagram } from 'lucide-react';

export function SocialLinks() {
  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="flex space-x-6">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-600 hover:text-purple-600 transition-colors"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}