
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, MessageCircle, Share2, Edit, Heart, Clock } from 'lucide-react';
import { Author } from '../types/Story';

interface UserProfileProps {
  user: Author & {
    bio: string;
    location: string;
    joinDate: string;
    followers: number;
    following: number;
    totalStories: number;
    totalLessons: number;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  // Mock recent stories for the user
  const recentStories = [
    {
      id: '1',
      title: 'How I Lost $50K in My First Startup and What I Learned',
      timeAgo: '2 days ago',
      category: 'startup',
      likes: 234,
      comments: 45,
      preview: 'Three years ago, I was convinced I had the next big idea - a social platform for pet owners. I quit my job, invested my savings...'
    },
    {
      id: '2',
      title: 'The Product Launch That Nobody Wanted',
      timeAgo: '1 week ago',
      category: 'career',
      likes: 156,
      comments: 23,
      preview: 'I spent 8 months building what I thought was the perfect product management tool. The launch day came and...'
    },
    {
      id: '3',
      title: 'Why I Turned Down My Dream Job Offer',
      timeAgo: '2 weeks ago',
      category: 'personal',
      likes: 89,
      comments: 12,
      preview: 'Two years ago, I received an offer that seemed too good to be true - a 40% salary increase, equity, and the chance...'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'career': return 'bg-blue-100 text-blue-700';
      case 'startup': return 'bg-green-100 text-green-700';
      case 'technical': return 'bg-purple-100 text-purple-700';
      case 'personal': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Profile Header */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-32 h-32 ring-4 ring-orange-100">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-400 text-white text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{user.name}</h1>
                <p className="text-xl text-slate-600 mb-3">{user.title}</p>
                <p className="text-slate-700 leading-relaxed mb-4">{user.bio}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{user.followers}</div>
                    <div className="text-sm text-slate-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{user.following}</div>
                    <div className="text-sm text-slate-500">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{user.totalStories}</div>
                    <div className="text-sm text-slate-500">Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{user.totalLessons}</div>
                    <div className="text-sm text-slate-500">Lessons</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Users className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Failure Categories */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <h2 className="text-xl font-semibold text-slate-800">Failure Categories</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Career Setbacks (5)</Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Startup Failures (3)</Badge>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Technical Mistakes (8)</Badge>
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">Personal Growth (2)</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Lessons */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <h2 className="text-xl font-semibold text-slate-800">Top Lessons Learned</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Always validate before building</h3>
              <p className="text-orange-700 text-sm">Learned this the hard way after spending 6 months building a product nobody wanted.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Communication is everything</h3>
              <p className="text-blue-700 text-sm">A simple misunderstanding cost us a major client and taught me the importance of clear communication.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-2">Failure is just feedback</h3>
              <p className="text-green-700 text-sm">Every setback has been a stepping stone to better understanding and growth.</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <h2 className="text-xl font-semibold text-slate-800">Recent Failure Stories</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentStories.map((story) => (
              <div key={story.id} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-800 text-lg hover:text-orange-600 cursor-pointer transition-colors">
                    {story.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-slate-500 text-sm">
                    <Clock className="w-3 h-3" />
                    <span>{story.timeAgo}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className={getCategoryColor(story.category)}>
                    {story.category}
                  </Badge>
                </div>
                
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {story.preview}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{story.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{story.comments} comments</span>
                  </div>
                  <button className="text-orange-600 hover:text-orange-700 font-medium">
                    Read full story
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
