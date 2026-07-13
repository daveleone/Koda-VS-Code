import type { Palette } from "../types";


export const ai = (palette: Palette) => ({

    //
    // Inline suggestions (Copilot ghost text)
    //

    "editorInlineSuggestion.foreground":
        palette.dim,

    "editorInlineSuggestion.background":
        palette.bg,


    //
    // Suggestion widgets
    //

    "editorSuggestWidget.background":
        palette.bg,

    "editorSuggestWidget.foreground":
        palette.fg,

    "editorSuggestWidget.selectedBackground":
        palette.line,

    "editorSuggestWidget.selectedForeground":
        palette.emphasis,

    "editorSuggestWidget.highlightForeground":
        palette.emphasis,


    //
    // Chat / Copilot panels
    //

    "chat.background":
        palette.bg,

    "chat.foreground":
        palette.fg,

    "chat.requestBackground":
        palette.line,

    "chat.requestBorder":
        palette.line,

    "chat.slashCommandBackground":
        palette.line,

    "chat.slashCommandForeground":
        palette.emphasis,


    //
    // Actions
    //

    "inlineChat.background":
        palette.bg,

    "inlineChat.foreground":
        palette.fg,

});