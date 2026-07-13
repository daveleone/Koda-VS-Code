import type { Palette } from "../types";


export const activitybar = (palette: Palette) => ({

    "activityBar.background":
        palette.bg,

    "activityBar.foreground":
        palette.fg,

    "activityBar.inactiveForeground":
        palette.comment,

    "activityBar.activeBorder":
        palette.emphasis,

    "activityBar.border":
        palette.line,

    "activityBarBadge.background":
        palette.line,

    "activityBarBadge.foreground":
        palette.emphasis,
});