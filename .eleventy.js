const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('prettyDate', (dateObj) => {
    var d = DateTime.fromJSDate(dateObj, {zone:'utc'});
    return d.toFormat("LLLL d, kkkk");
  });

  // limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addWatchTarget("./content/css");
  eleventyConfig.addPassthroughCopy("./content/css");
  eleventyConfig.addPassthroughCopy("./content/blog/**/*.(png|jpg|jpeg)");

  return {
		dir: {
			input: "content"
		}
	};

};