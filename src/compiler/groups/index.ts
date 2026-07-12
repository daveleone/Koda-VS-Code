import { editor } from "./editor";
import { tabs } from "./tabs";
import { sidebar } from "./sidebar";
import { panel } from "./panel";
import { statusbar } from "./statusbar";
import { menubar } from "./menubar";
import { quickinput } from "./quickinput";
import { activitybar } from "./activitybar";
import { titlebar } from "./titlebar";
import { interactive } from "./interactive";
import { ai } from "./ai";
import { links } from "./links";
import { notifications } from "./notifications";
import { progress } from "./progress";

export const ui = {

    ...editor,

    ...tabs,

    ...sidebar,

    ...panel,

    ...statusbar,

    ...menubar,

    ...quickinput,

    ...activitybar,

    ...titlebar,

    ...interactive,

    ...ai,

    ...links,

    ...notifications,

    ...progress,
};