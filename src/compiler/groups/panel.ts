import type { Palette } from "../types";


export const panel = (palette: Palette) => ({

    "panel.background":
        palette.bg,

    "panel.border":
        palette.line,


    "panelTitle.activeForeground":
        palette.emphasis,

    "panelTitle.inactiveForeground":
        palette.comment,

});