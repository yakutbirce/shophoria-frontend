import React from 'react';
import PostCard from './PostCard';
import featured1 from "../../../assets/logos/featuredposts1.png";
import featured2 from "../../../assets/logos/featuredposts2.png";

const FeaturedPosts = () => {
  const posts = [
    {
      image: featured1,
      date: "22 April 2025",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: featured2,
      date: "22 April 2025",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
  ];

  return (
    <section className="flex flex-col gap-20 items-center px-4 py-20 bg-white max-w-screen-sm w-full overflow-x-hidden">
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
