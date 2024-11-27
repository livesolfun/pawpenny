import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="p-3 bg-purple-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}