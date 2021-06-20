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

  return config;
};
