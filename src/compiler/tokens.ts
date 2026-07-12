import type { ThemeToken } from "./types";


export function token(scope: string | string[], settings: ThemeToken["settings"]): ThemeToken {

    return {
        scope,
        settings
    };
}