import type { Palette } from "../types";


export const menubar = (palette: Palette) => ({

    "menubar.selectionForeground":
        palette.emphasis,

    "menubar.selectionBackground":
        palette.bg,

    "menu.background":
        palette.bg,

    "menu.foreground":
        palette.fg,

    "menu.selectionBackground":
        palette.line,

    "menu.selectionForeground":
        palette.emphasis,

});