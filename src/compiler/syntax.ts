import { palette } from "./palette";
import { token } from "./tokens";


export const syntax = [

    // Comment
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


    // Constants
    token(
        [
            "constant",
            "constant.language"
        ],
        {
            foreground: palette.const
        }
    ),


    // Strings
    token(
        [
            "string",
            "string.quoted"
        ],
        {
            foreground: palette.string
        }
    ),


    // Characters
    token(
        [
            "constant.character"
        ],
        {
            foreground: palette.char
        }
    ),


    // Numbers
    token(
        [
            "constant.numeric"
        ],
        {
            foreground: palette.const
        }
    ),


    // Boolean
    token(
        [
            "constant.language.boolean"
        ],
        {
            foreground: palette.const
        }
    ),


    // Variables
    token(
        [
            "variable",
            "identifier"
        ],
        {
            foreground: palette.special
        }
    ),


    // Functions
    token(
        [
            "entity.name.function",
            "support.function"
        ],
        {
            foreground: palette.func
        }
    ),


    // Keywords
    token(
        [
            "keyword",
            "storage"
        ],
        {
            foreground: palette.keyword
        }
    ),


    // Operators
    token(
        [
            "keyword.operator",
            "punctuation.separator"
        ],
        {
            foreground: palette.operator
        }
    ),


    // Types
    token(
        [
            "entity.name.type",
            "support.type"
        ],
        {
            foreground: palette.type
        }
    ),


    // Preprocessor
    token(
        [
            "meta.preprocessor"
        ],
        {
            foreground: palette.fg
        }
    ),


    // Tags (HTML/XML)
    token(
        [
            "entity.name.tag"
        ],
        {
            foreground: palette.fg
        }
    ),


    // Errors
    token(
        [
            "invalid"
        ],
        {
            foreground: palette.danger
        }
    ),


    // Added / changed / removed
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
];