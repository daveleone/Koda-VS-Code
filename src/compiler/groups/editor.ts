import type { Palette } from "../types";


export const editor = (palette: Palette) => ({

    "editor.background":
        palette.bg,

    "editor.foreground":
        palette.fg,

    "editorCursor.foreground":
        palette.fg,

    "editor.lineHighlightBackground":
        palette.line,

    "editor.lineHighlightBorder":
        palette.line,

    "editor.selectionBackground":
        palette.line,

    "editorLineNumber.foreground":
        palette.comment,

    "editorLineNumber.activeForeground":
        palette.special,

    "editorIndentGuide.background":
        palette.line,

    "editorIndentGuide.activeBackground":
        palette.dim,

    //
    // AI Suggestions (Copilot ghost text)
    //

    "editorSuggestWidget.background":
        palette.bg,

    "editorSuggestWidget.foreground":
        palette.fg,

    "editorSuggestWidget.selectedBackground":
        palette.line,

    "editorSuggestWidget.highlightForeground":
        palette.emphasis,
});