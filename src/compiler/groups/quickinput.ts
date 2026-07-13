import type { Palette } from "../types";


export const quickinput = (palette: Palette) => ({

    "quickInput.background":
        palette.bg,

    "quickInput.foreground":
        palette.fg,


    "quickInputTitle.background":
        palette.bg,


    "input.background":
        palette.bg,

    "input.foreground":
        palette.fg,

    "input.border":
        palette.line,


    "inputOption.activeBackground":
        palette.line,

    "inputOption.activeForeground":
        palette.emphasis,


    "quickInputList.focusBackground":
        palette.line,

    "quickInputList.focusForeground":
        palette.emphasis,

});