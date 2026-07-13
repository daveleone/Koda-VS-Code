import type { Palette } from "./types";


export const semantic = (palette: Palette) => ({
    variable: {
        foreground: palette.fg,
    },
    "variable.readonly": {
        foreground: palette.fg,
    },
    "variable.defaultLibrary": {
        foreground: palette.const,
    },
    parameter: {
        foreground: palette.fg,
    },
    property: {
        foreground: palette.fg,
    },
    "property.readonly": {
        foreground: palette.fg,
    },
    namespace: {
        foreground: palette.fg,
    },
    "namespace.defaultLibrary": {
        foreground: palette.fg,
    },
    function: {
        foreground: palette.func,
    },
    method: {
        foreground: palette.func,
    },
    type: {
        foreground: palette.type,
    },
    class: {
        foreground: palette.type,
    },
    interface: {
        foreground: palette.type,
    },
    struct: {
        foreground: palette.type,
    },
    keyword: {
        foreground: palette.keyword,
    },
    string: {
        foreground: palette.string,
    },
    number: {
        foreground: palette.const,
    },
    operator: {
        foreground: palette.operator,
    },
    constant: {
        foreground: palette.const,
    },
    "variable.constant": {
        foreground: palette.const,
    },
    "variable.defaultLibrary.constant": {
        foreground: palette.const,
    },
    enumMember: {
        foreground: palette.const,
    },
});