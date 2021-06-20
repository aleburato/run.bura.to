//@ts-check
const config = {
  dir: {
    input: "src",
    output: "dist",
  },
};

module.exports = function (eleventyConfig) {
  const publicDir = `${config.dir.input}/public`;

  // The following copies the content of "public" to the site root (`/`)
  eleventyConfig.addPassthroughCopy({ [publicDir]: "/" });

  // need to do this as the default 'slug' eleventy filter leaves ':' inside the slug
  const slugify = require("slugify");
  eleventyConfig.addFilter("slug", (input) =>
    // @ts-ignore
    slugify(input, {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    })
  );

  // co-locate page assets
  const pageAssetsPlugin = require("eleventy-plugin-page-assets");
  eleventyConfig.addPlugin(pageAssetsPlugin, {
    postsMatching: "src/posts/**/*.md",
    mode: "directory",
  });

  return config;
};
