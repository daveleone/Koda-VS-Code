import type { Palette } from "../types";


export const tabs = (palette: Palette) => ({

    //
    // File tabs
    //

    "editorGroupHeader.tabsBackground":
        palette.bg,

    "tab.activeBackground":
        palette.bg,

    "tab.activeForeground":
        palette.emphasis,


    "tab.inactiveBackground":
        palette.bg,

    "tab.inactiveForeground":
        palette.comment,


    //
    // Bottom separator
    //

    "tab.border":
        palette.line,

    "tab.activeBorder":
        palette.emphasis,

    "tab.activeBorderTop":
        palette.bg,


    //
    // Close button
    //

    "tab.hoverBackground":
        palette.line,

});