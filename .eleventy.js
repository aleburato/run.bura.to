//@ts-check
const config = {
  dir: {
    input: "src",
    output: "dist",
  },
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "jpg",
    "png",
    "webp", // css is not yet a recognized template extension in Eleventy
  ]);

  const publicDir = `${config.dir.input}/public`;
  // The following copies the content of "public" to the site root (`/`)
  eleventyConfig.addPassthroughCopy({ [publicDir]: "/" });

  //
  const slugify = require("slugify");
  eleventyConfig.addFilter("slug", (input) =>
    // @ts-ignore
    slugify(input, {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    })
  );

  return config;
};
