import type { Palette } from "../types";


export const links = (palette: Palette) => ({

    //
    // Normal links
    //

    "textLink.foreground":
        palette.special,

    "textLink.activeForeground":
        palette.const,


    //
    // Markdown/docs links
    //

    "textPreformat.foreground":
        palette.fg,


    //
    // Welcome page links
    //

    "welcomePage.tileHoverBackground":
        palette.line,

    "walkthrough.embeddedEditorBackground":
        palette.bg,

});