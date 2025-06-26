
import { Story } from '../types/Story';

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'How I Lost $50K in My First Startup and What I Learned',
    content: `Three years ago, I was convinced I had the next big idea - a social platform for pet owners. I quit my job, invested my savings, and dove headfirst into building what I thought would be the "Facebook for pets."

    I made every classic mistake in the book. I didn't validate my idea with real users, I spent months perfecting features nobody wanted, and I hired too many people too fast. By month 8, I was burning through $8K monthly with zero revenue.

    The worst part wasn't losing the money - it was the shame. I felt like I had failed everyone who believed in me. I avoided networking events, stopped posting on social media, and basically disappeared from the startup scene.

    But here's what I wish I had known: failure isn't the opposite of success, it's part of it. Every entrepreneur I now admire has similar stories. The difference is they learned from them instead of hiding from them.`,
    lessonLearned: 'Validate your idea with real customers before building anything. Talk to 100 potential users before writing a single line of code.',
    author: {
      id: '1',
      name: 'Sarah Chen',
      title: 'Product Manager at TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    category: 'startup',
    timeAgo: '2 days ago',
    likes: 234,
    comments: 45,
    views: '2.1K'
  },
  {
    id: '2',
    title: 'The Interview That Went So Wrong It Became a Learning Experience',
    content: `I still cringe thinking about this interview from last year. It was for my dream job at a top tech company, and I was incredibly nervous.

    Everything started going wrong from the moment I walked in. I arrived 20 minutes early and spent the time in the lobby getting more anxious. When they called my name, I stood up too quickly and knocked over my coffee all over their pristine white couch.

    The technical interview was worse. My mind went completely blank on a problem I could solve in my sleep. I started sweating, stumbling over my words, and making basic syntax errors. The interviewer actually stopped me halfway through and asked if I needed a break.

    I wanted to disappear. I apologized profusely, made more mistakes, and left feeling like I'd never work in tech again. I didn't get the job, obviously.`,
    lessonLearned: 'Practice your technical skills, but more importantly, practice managing your nerves. Mock interviews with friends helped me realize that messing up one interview doesn\'t define your worth as a developer.',
    author: {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'Software Engineer at StartupCo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    category: 'career',
    timeAgo: '1 week ago',
    likes: 189,
    comments: 67,
    views: '1.8K'
  },
  {
    id: '3',
    title: 'My Code Deployment That Took Down Production on Black Friday',
    content: `Picture this: Black Friday, 2022. Our e-commerce site was expecting its biggest traffic day of the year. I had been working on a "small" optimization to our checkout process for weeks.

    At 2 PM, right as traffic was peaking, I deployed my changes. Within 5 minutes, our checkout system was completely broken. Customers couldn't complete purchases, the site was throwing 500 errors, and our CEO was calling every 30 seconds.

    I had made a classic rookie mistake - I didn't test my code with real production data. My optimization worked perfectly in our development environment but completely failed when it encountered the edge cases that only existed in production.

    We lost approximately $200K in sales during the 3 hours it took to roll back and fix the issue. I felt sick to my stomach and was sure I'd be fired.

    But my team rallied around me. Instead of blame, they focused on how we could prevent this from happening again. We implemented better testing procedures, staging environments that mirror production, and a buddy system for all deployments.`,
    lessonLearned: 'Never deploy critical changes without thorough testing in a production-like environment. Also, having a supportive team that focuses on solutions rather than blame makes all the difference.',
    author: {
      id: '3',
      name: 'Emily Watson',
      title: 'Senior Developer at RetailTech',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    category: 'technical',
    timeAgo: '3 days ago',
    likes: 312,
    comments: 89,
    views: '3.2K'
  },
  {
    id: '4',
    title: 'Why I Turned Down a Six-Figure Job Offer and Regretted It',
    content: `Two years ago, I received an offer that seemed too good to be true - a 40% salary increase, equity, and the chance to work at a unicorn startup. But I turned it down because I was comfortable where I was.

    I had been at my current company for 5 years, knew everyone, and felt secure. The new opportunity seemed risky and would require me to learn new technologies. I convinced myself that stability was more valuable than growth.

    Six months later, I watched as the startup I turned down raised a massive Series B. My friends who joined around the same time I was offered the position are now senior engineers with significant equity. Meanwhile, I'm still in the same role, doing the same work.

    The worst part is realizing that my "safe" choice was actually the riskiest one. By staying comfortable, I stopped growing professionally and personally.`,
    lessonLearned: 'Growth requires discomfort. Sometimes the riskiest choice is not taking any risks at all. Trust in your ability to adapt and learn new things.',
    author: {
      id: '4',
      name: 'David Park',
      title: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    category: 'career',
    timeAgo: '5 days ago',
    likes: 156,
    comments: 34,
    views: '1.5K'
  },
  {
    id: '5',
    title: 'The Personal Project That Taught Me I Was Burning Out',
    content: `Last year, I decided to build a side project - a habit tracking app. I was working 60+ hours at my day job but convinced myself I could handle it. I'd code until 2 AM, wake up at 6 AM, and repeat.

    For three months, I pushed through exhaustion, ignored my relationships, and stopped exercising. I was so focused on "grinding" that I didn't notice I was miserable.

    The breaking point came when I realized I hadn't made any meaningful progress on the app in weeks. I was too tired to think clearly, my code quality was terrible, and I was making stupid mistakes that would take hours to debug.

    I finally deleted the entire project. Not because it was bad, but because I needed to admit that I was spreading myself too thin. I took a month off from any side projects and focused on getting my life back in balance.`,
    lessonLearned: 'Burnout doesn\'t make you more productive - it makes you less effective at everything. Sometimes the most productive thing you can do is rest and reset.',
    author: {
      id: '5',
      name: 'Anna Martinez',
      title: 'UX Designer at DesignStudio',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    category: 'personal',
    timeAgo: '1 week ago',
    likes: 278,
    comments: 52,
    views: '2.4K'
  }
];
