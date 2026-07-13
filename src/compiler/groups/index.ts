import { activitybar } from "./activitybar";
import { ai } from "./ai";
import { editor } from "./editor";
import { interactive } from "./interactive";
import { links } from "./links";
import { menubar } from "./menubar";
import { notifications } from "./notifications";
import { panel } from "./panel";
import { progress } from "./progress";
import { quickinput } from "./quickinput";
import { sidebar } from "./sidebar";
import { statusbar } from "./statusbar";
import { tabs } from "./tabs";
import { titlebar } from "./titlebar";

import type { Palette } from "../types";

export const createUI = (palette: Palette) => ({

    ...activitybar(palette),

    ...ai(palette),

    ...editor(palette),

    ...interactive(palette),

    ...links(palette),

    ...menubar(palette),

    ...notifications(palette),

    ...panel(palette),

    ...progress(palette),

    ...quickinput(palette),

    ...sidebar(palette),

    ...statusbar(palette),

    ...tabs(palette),

    ...titlebar(palette),
});

export const ui = createUI;