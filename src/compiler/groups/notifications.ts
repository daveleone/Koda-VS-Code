import type { Palette } from "../types";


export const notifications = (palette: Palette) => ({

    //
    // Notification cards
    //

    "notifications.background":
        palette.bg,

    "notifications.foreground":
        palette.fg,

    "notificationCenter.border":
        palette.line,

    "notificationCenterHeader.background":
        palette.bg,

    "notificationCenterHeader.foreground":
        palette.fg,


    //
    // Notification severity colors
    //

    "notificationsInfoIcon.foreground":
        palette.const,

    "notificationsWarningIcon.foreground":
        palette.warning,

    "notificationsErrorIcon.foreground":
        palette.danger,

});