// not needed, but leaving here in case I want it later
const { EleventyRenderPlugin } = require("@11ty/eleventy");
// import luxon for post datetime conversion
const { DateTime } = require("luxon");
// fast glob for iterating over folders and including files, used for images etc
const fg = require('fast-glob');
// for excerpt rendering markdown to HTML
const markdownIt = require("markdown-it");
// for atom/rss feed
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
      });
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addPassthroughCopy('src/assets');
//    eleventyConfig.addPassthroughCopy('src/shrines');
    eleventyConfig.addPassthroughCopy('src/script');
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_MED);
      });
    eleventyConfig.addFilter("gallery", function (dir="") {
        return fg.sync(dir);
      });
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
      });
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};