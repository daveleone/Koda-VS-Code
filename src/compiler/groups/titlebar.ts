import type { Palette } from "../types";


export const titlebar = (palette: Palette) => ({

    "titleBar.activeBackground":
        palette.bg,

    "titleBar.activeForeground":
        palette.fg,

    "titleBar.inactiveBackground":
        palette.bg,

    "titleBar.inactiveForeground":
        palette.comment,

});