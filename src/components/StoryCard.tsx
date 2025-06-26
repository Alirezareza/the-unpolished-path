
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Clock, ArrowUp } from 'lucide-react';
import { Story } from '../types/Story';

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  const truncatedContent = story.content.length > 300 
    ? story.content.substring(0, 300) + '...' 
    : story.content;

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:bg-white">
      <div className="flex items-start space-x-4">
        <Avatar className="w-12 h-12 ring-2 ring-orange-100">
          <AvatarImage src={story.author.avatar} />
          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-400 text-white">
            {story.author.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-slate-800">{story.author.name}</h3>
            <span className="text-slate-400">•</span>
            <span className="text-sm text-slate-500">{story.author.title}</span>
            <span className="text-slate-400">•</span>
            <div className="flex items-center space-x-1 text-slate-500">
              <Clock className="w-3 h-3" />
              <span className="text-xs">{story.timeAgo}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
            {story.title}
          </h2>

          <div className="flex items-center space-x-2 mb-4">
            <Badge 
              variant="secondary" 
              className={`${
                story.category === 'career' ? 'bg-blue-100 text-blue-700' :
                story.category === 'startup' ? 'bg-green-100 text-green-700' :
                story.category === 'technical' ? 'bg-purple-100 text-purple-700' :
                'bg-pink-100 text-pink-700'
              }`}
            >
              {story.category}
            </Badge>
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Lesson Learned
            </Badge>
          </div>

          <div className="prose prose-slate max-w-none mb-4">
            <p className="text-slate-700 leading-relaxed">
              {showFullStory ? story.content : truncatedContent}
            </p>
            {story.content.length > 300 && (
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm mt-2"
              >
                {showFullStory ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>

          {story.lessonLearned && (
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-4 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <ArrowUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-800 text-sm mb-1">Key Takeaway</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">{story.lessonLearned}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 hover:bg-red-50 ${
                  isLiked ? 'text-red-600' : 'text-slate-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm">{story.likes + (isLiked ? 1 : 0)}</span>
              </Button>

              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-slate-500 hover:bg-blue-50 hover:text-blue-600">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{story.comments}</span>
              </Button>

              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-slate-500 hover:bg-green-50 hover:text-green-600">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </Button>
            </div>

            <div className="text-xs text-slate-400">
              {story.views} views
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;
