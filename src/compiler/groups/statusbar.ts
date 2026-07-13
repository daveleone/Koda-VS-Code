import type { Palette } from "../types";


export const statusbar = (palette: Palette) => ({

    "statusBar.background":
        palette.bg,

    "statusBar.foreground":
        palette.fg,

    "statusBarItem.hoverBackground":
        palette.dim,

    "statusBar.debuggingBackground":
        palette.bg,

    "statusBar.noFolderBackground":
        palette.bg,

    "statusBarItem.prominentBackground":
        palette.bg,

    "statusBar.remoteBackground":
        palette.bg,

    "statusBarItem.remoteBackground":
        palette.bg,
});