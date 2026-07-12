export function blend(foreground: string, background: string, amount: number): string {

    const fg = hexToRgb(foreground);
    const bg = hexToRgb(background);

    const r = Math.round(
        fg.r * amount + bg.r * (1 - amount)
    );

    const g = Math.round(
        fg.g * amount + bg.g * (1 - amount)
    );

    const b = Math.round(
        fg.b * amount + bg.b * (1 - amount)
    );

    return rgbToHex(r, g, b);
}


function hexToRgb(hex: string) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}


function rgbToHex(r: number, g: number, b: number) {
    return "#" + [r, g, b]
        .map(x =>
            x.toString(16).padStart(2, "0")
        )
        .join("");
}