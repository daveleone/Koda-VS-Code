import { token } from "./tokens";
import type { Palette } from "./types";


export const syntax = (palette: Palette) => [
    token(
        [
            "comment",
            "punctuation.definition.comment"
        ],
        {
            foreground: palette.comment,
            fontStyle: "italic"
        }
    ),

    token(
        [
            "constant",
            "constant.language",
            "constant.numeric",
            "constant.numeric.integer",
            "constant.numeric.float",
            "constant.language.boolean",
            "support.constant",
            "variable.other.enummember"
        ],
        {
            foreground: palette.const
        }
    ),

    token(
        [
            "string",
            "string.quoted",
            "string.template",
            "string.regexp"
        ],
        {
            foreground: palette.string
        }
    ),

    token(
        [
            "constant.character",
            "constant.character.escape"
        ],
        {
            foreground: palette.char
        }
    ),

    token(
        [
            "variable",
            "variable.other",
            "variable.parameter",
            "variable.language",
            "identifier",
            "entity.name.variable",
            "variable.other.readwrite",
            "variable.other.property",
            "variable.object.property",
            "variable.member"
        ],
        {
            foreground: palette.fg
        }
    ),

    token(
        [
            "variable.other.readwrite.alias",
            "entity.name.namespace",
            "entity.name.import",
            "support.module",
            "support.type"
        ],
        {
            foreground: palette.keyword
        }
    ),

    token(
        [
            "entity.name.function",
            "support.function",
            "variable.function",
            "meta.function-call",
            "support.function.builtin"
        ],
        {
            foreground: palette.func
        }
    ),

    token(
        [
            "keyword",
            "keyword.control",
            "storage",
            "storage.modifier",
            "meta.preprocessor",
            "keyword.control.import",
            "keyword.control.from"
        ],
        {
            foreground: palette.keyword
        }
    ),

    token(
        [
            "keyword.operator",
            "punctuation.separator",
            "punctuation.accessor"
        ],
        {
            foreground: palette.operator
        }
    ),

    token(
        [
            "entity.name.type",
            "entity.name.class",
            "entity.name.interface",
            "entity.name.struct",
            "support.type"
        ],
        {
            foreground: palette.type
        }
    ),

    token(
        [
            "storage.type",
            "storage.type.class",
            "storage.type.interface",
            "storage.type.struct",
            "storage.class",
            "storage.modifier"
        ],
        {
            foreground: palette.keyword
        }
    ),

    token(
        [
            "entity.name.tag"
        ],
        {
            foreground: palette.fg
        }
    ),

    token(
        [
            "invalid"
        ],
        {
            foreground: palette.danger
        }
    ),

    token(
        [
            "markup.inserted"
        ],
        {
            foreground: palette.success
        }
    ),

    token(
        [
            "markup.changed"
        ],
        {
            foreground: palette.warning
        }
    ),

    token(
        [
            "markup.deleted"
        ],
        {
            foreground: palette.danger
        }
    ),

    token(
        [
            "markup.heading"
        ],
        {
            foreground: palette.emphasis,
            fontStyle: "bold"
        }
    ),

    token(
        [
            "markup.italic"
        ],
        {
            fontStyle: "italic"
        }
    ),

    token(
        [
            "markup.bold"
        ],
        {
            fontStyle: "bold"
        }
    ),

    token(
        [
            "markup.raw"
        ],
        {
            foreground: palette.const
        }
    ),

    token(
        [
            "markup.link.url"
        ],
        {
            foreground: palette.info,
            fontStyle: "underline"
        }
    ),

    token(
        [
            "variable.other.constant.property",
            "variable.other.constant.property.ts"
        ],
        {
            foreground: palette.keyword
        }
    ),
];