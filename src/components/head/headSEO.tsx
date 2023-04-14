import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

const HeadSEO: React.FC<Props> = ({ description, title }) => {
  return (
    <Head>
      <title>{title && `${title} | `} Neroi-space</title>
      <meta name="description" content={description || "Graawww"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadSEO;
