import NextHead from "next/head";
import React from "react";

type HeadProps = {
  title?: string;
  description?: string | null;
  image?: string | null;
};

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title ? `${title} | Beer App` : "Beer App"}</title>
      <meta itemProp="name" content={title || "Loading"} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
