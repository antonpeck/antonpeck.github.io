const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter('prettyDate', (dateObj) => {
    var d = DateTime.fromJSDate(dateObj, {zone:'utc'});
    return d.toFormat("LLLL d, kkkk");
  });
  eleventyConfig.addPassthroughCopy("css");
};