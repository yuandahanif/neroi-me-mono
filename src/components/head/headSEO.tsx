import { NextSeo } from "next-seo";

interface Props {
  title?: string;
  description?: string;
}

/**
 * @deprecated
 * */
const HeadSEO: React.FC<Props> = ({ description, title }) => {
  return (
    <>
      <NextSeo
        title={`${title ? `${title} | ` : ""} Neroi.space`}
        description={`${
          description ??
          "Selamat data di Neroi.space, web pribadi milik [Redacted]."
        }`}
      />
    </>
  );
};

export default HeadSEO;
