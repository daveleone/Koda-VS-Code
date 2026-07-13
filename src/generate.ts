import fs from "node:fs";

import { createUI } from "./compiler/groups";
import { semantic } from "./compiler/semantic";
import { syntax } from "./compiler/syntax";
import { dark } from "./themes/dark";
import { glade } from "./themes/glade";
import { light } from "./themes/light";
import { moss } from "./themes/moss";

const themes = {
    dark,
    glade,
    light,
    moss,
};

for (const [name, palette] of Object.entries(themes)) {
    const theme = {
        name: `Koda ${name[0].toUpperCase()}${name.slice(1)}`,
        type: name === "light" ? "light" : "dark",
        semanticHighlighting: true,
        colors: createUI(palette),
        tokenColors: syntax(palette),
        semanticTokenColors: semantic(palette),
    };

    fs.writeFileSync(
        `themes/koda-${name}-color-theme.json`,
        JSON.stringify(theme, null, 4)
    );
}

console.log("Generated Koda themes");