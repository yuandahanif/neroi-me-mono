import { MDX } from "~/components/mdx/mdx";

import { fetchMDXContent } from "~/utils/mdx";
import type { MDXContent } from "~/utils/mdx";
import { fetchFile, fetchPaths } from "~/utils/fs";

import type { NextPage, GetStaticProps } from "next";
import MainLayout from "~/layouts/main.layout";

type PageProps = {
  content: MDXContent;
  frontmatter?: string;
};

const basePath = ["src", "contents"]; // path to the content directory
const extension = "mdx";

export const getStaticPaths = async () => {
  const paths = (
    await fetchPaths({
      basePath,
      path: [],
      extension,
    })
  ).map((path) => ({
    params: {
      path: path,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { path } = params;

  if (!Array.isArray(path)) {
    return {
      notFound: true,
    };
  }

  const file = await fetchFile({
    basePath,
    path: path,
    extension,
  });

  /*for frontmatter */
  const { frontmatter, ...content } = await fetchMDXContent(file);
  console.log(frontmatter);

  const props = {
    content,
    frontmatter: JSON.stringify(frontmatter),
  };

  return { props };
};

const MDXPage: NextPage<PageProps> = ({ content, frontmatter }) => (
  <MainLayout>
    <article>
      <MDX content={content} />
    </article>
  </MainLayout>
);

export default MDXPage;
