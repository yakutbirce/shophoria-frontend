import React from 'react';
import PostCard from './PostCard';

const FeaturedPosts = () => {
  const posts = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f3a292a1dafd2977b540d287ebdd430aab34fa2",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d212daa7d0ac37113eb89461216adc1715c02f9e",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
  ];

  return (
    <section className="flex flex-col gap-20 items-center px-0 py-20 mx-auto bg-white max-w-screen-sm">
      <header className="flex flex-col gap-2.5 items-center">
        <p className="text-sm font-bold tracking-wide leading-6 text-sky-500">Practice Advice</p>
        <h2 className="text-4xl font-bold tracking-wide leading-[50px] text-slate-800 text-center">Featured Posts</h2>
      </header>
      <div className="flex flex-col gap-8 items-center">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
