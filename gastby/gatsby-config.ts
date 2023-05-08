import type { GatsbyConfig } from "gatsby";
/* eslint-disable import/first */
import dotenv from "dotenv";
import path from "path";

const configPath = path.resolve(`${__dirname}/.env.development`);
dotenv.config({
  path: configPath,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Test page Cris`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_API_DATASET || "CONFIG_NOT_SET",
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_READ_TOKEN || "CONFIG_NOT_SET",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

export default config;
