
import React, { useState } from 'react';
import Header from '../components/Header';
import StoryFeed from '../components/StoryFeed';
import Sidebar from '../components/Sidebar';
import { mockStories } from '../data/mockData';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStories = activeFilter === 'all' 
    ? mockStories 
    : mockStories.filter(story => story.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Sidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
          <div className="lg:col-span-3">
            <StoryFeed stories={filteredStories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
