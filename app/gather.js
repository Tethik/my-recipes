// Gathers all md/mdx files in the parent directory.
const contentFolder = "../";
const fs = require("fs");

fs.readdir(contentFolder, (err, files) => {
  const f = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .filter((file) => file !== "README.md");

  fs.writeFileSync("src/content/index.json", JSON.stringify(f));
  f.forEach((file) => fs.copyFileSync(contentFolder + file, "src/content/" + file));
});

// could add search tagging here
