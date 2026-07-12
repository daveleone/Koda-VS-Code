import fs from "node:fs";

import { ui } from "./compiler/groups";
import { syntax } from "./compiler/syntax";
import { semantic } from "./compiler/semantic";


const theme = {
    name: "Koda",
    type: "dark",
    semanticHighlighting: true,
    colors: ui,
    tokenColors: syntax,
    semanticTokenColors: semantic,
};


fs.writeFileSync(
    "themes/koda-color-theme.json",
    JSON.stringify(theme, null, 4)
);


console.log("Generated Koda theme");