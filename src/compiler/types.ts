export interface Palette {
    bg: string;
    fg: string;
    dim: string;
    line: string;

    keyword: string;
    type: string;
    operator: string;

    comment: string;

    border: string;
    emphasis: string;

    func: string;
    string: string;
    char: string;
    special: string;

    const: string;

    highlight: string;
    info: string;

    success: string;
    warning: string;
    danger: string;

    green: string;
    orange: string;
    red: string;

    pink: string;
    cyan: string;
}

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
    semanticTokenColors?: Record<string, string | { foreground?: string; fontStyle?: string }>;
}