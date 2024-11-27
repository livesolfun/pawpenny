import React from 'react';

interface RoadmapItem {
  quarter: string;
  items: string[];
}

export function Roadmap({ items }: { items: RoadmapItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-purple-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600" />
          <h3 className="text-xl font-bold mb-2">{item.quarter}</h3>
          <ul className="space-y-2">
            {item.items.map((task, taskIndex) => (
              <li key={taskIndex} className="text-gray-600">{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}