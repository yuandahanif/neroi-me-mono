import type { Metadata } from "next";
import type { FC } from "react";
import BlogComp from "./blog-component";
export function generateMetadata(): Metadata {
  return {
    title: "hi from app router",
    description: "hi from app router",
  };
}

const HomePage: FC = () => {
  return (
    <>
      <div>
        <h1>Hi from app router</h1>

        <BlogComp />
      </div>
    </>
  );
};

export default HomePage;
