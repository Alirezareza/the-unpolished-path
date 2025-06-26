
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Briefcase, Code, Heart, DollarSign, Users } from 'lucide-react';

interface SidebarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categories = [
  { id: 'all', label: 'All Failures', icon: TrendingUp, count: 42 },
  { id: 'career', label: 'Career Setbacks', icon: Briefcase, count: 15 },
  { id: 'startup', label: 'Startup Failures', icon: DollarSign, count: 8 },
  { id: 'technical', label: 'Technical Mistakes', icon: Code, count: 12 },
  { id: 'personal', label: 'Personal Growth', icon: Heart, count: 7 },
];

const Sidebar = ({ activeFilter, onFilterChange }: SidebarProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all hover:bg-slate-50 ${
                  activeFilter === category.id 
                    ? 'bg-orange-50 border-l-4 border-orange-500 text-orange-700' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <h3 className="font-semibold text-slate-800 mb-3">💡 Why Share Failures?</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Every failure is a lesson waiting to be shared. By being vulnerable about our setbacks, 
          we create a community where learning trumps ego.
        </p>
      </Card>
    </div>
  );
};

export default Sidebar;
