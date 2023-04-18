// Gathers all md/mdx files in the parent directory.
const contentFolder = "../";
const fs = require("fs");

const files = fs.readdirSync(contentFolder);
const f = files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx")).filter((file) => file !== "README.md");
const index = f.map((file) => {
  const content = fs.readFileSync(contentFolder + file, "utf8");
  const title = content.match(/\n?# ?([^#]+?)\n/)[1];
  console.log(title, contentFolder + file);
  return { title, file };
});

fs.writeFileSync("src/content/index.json", JSON.stringify(index));
f.forEach((file) => fs.copyFileSync(contentFolder + file, "src/content/" + file));

const imgs = fs.readdirSync(contentFolder + "/img");
// imgs.forEach((file) => fs.copyFileSync(contentFolder + "/img/" + file, "src/content/img/" + file));
imgs.forEach((file) => fs.copyFileSync(contentFolder + "/img/" + file, "public/img/" + file));

// could add search tagging here
