
import React from 'react';
import StoryCard from './StoryCard';
import { Story } from '../types/Story';

interface StoryFeedProps {
  stories: Story[];
}

const StoryFeed = ({ stories }: StoryFeedProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Latest Failure Stories</h2>
        <span className="text-sm text-slate-500">{stories.length} stories</span>
      </div>
      
      <div className="space-y-6">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryFeed;
