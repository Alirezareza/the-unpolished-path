
import React from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  // Mock user data - in a real app this would come from an API or database
  const userData = {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Product Manager & Serial Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate about building products that solve real problems. I've failed more times than I've succeeded, and each failure has taught me invaluable lessons about entrepreneurship, product development, and leadership.",
    location: "San Francisco, CA",
    joinDate: "March 2023",
    followers: 1247,
    following: 892,
    totalStories: 18,
    totalLessons: 23
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <UserProfile user={userData} />
    </div>
  );
};

export default Profile;
