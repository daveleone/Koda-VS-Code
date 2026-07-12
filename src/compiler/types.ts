export interface ThemeToken {
    scope: string | string[];
    settings: {
        foreground?: string;
        background?: string;
        fontStyle?: string;
    };
}

export interface VSCodeTheme {
    name: string;
    type: "dark" | "light";
    colors: Record<string, string>;
    tokenColors: ThemeToken[];
    semanticHighlighting?: boolean;
    semanticTokenColors?: Record<string, string>;
}