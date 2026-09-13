import { copyFileSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "dist/client";
const assets = readdirSync(join(dir, "assets"));
const css = assets.find((f) => f.endsWith(".css"));
if (!css) throw new Error("no css in dist/client/assets");

let html = readFileSync(join(dir, "_shell.html"), "utf8");
html = html.replace(
  /\/python-descriptor\/assets\/styles-[^"']+\.css/g,
  `/python-descriptor/assets/${css}`,
);
html = html.replace(/href="\/favicon\.svg"/g, 'href="/python-descriptor/favicon.svg"');
html = html.replace(/href="\/__grok\//g, 'href="/python-descriptor/__grok/');

writeFileSync(join(dir, "index.html"), html);
copyFileSync(join(dir, "index.html"), join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");
console.log("pages ready:", css);
