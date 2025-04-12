import React from "react";
import FeaturedPosts from "./Mobile/FeaturedPosts";
import DesktopBlog2 from "./Desktop/DesktopBlog2";

const BlogSection = () => {
  return (
    <>
      <div className="block lg:hidden">
        <FeaturedPosts />
      </div>
      <div className="hidden lg:block">
        <DesktopBlog2 />
      </div>
    </>
  );
};

export default BlogSection;
