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
      <link rel="icon" href="/icons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/icons/browserconfig.xml"
      />
      <meta name="theme-color" content="#171717" />
    </Head>
  );
};

export default HeadSEO;
