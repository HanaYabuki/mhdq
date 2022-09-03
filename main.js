const SPACE = '\u3000';

function encode(str, width, height) {
    if (width < 1) width = 1;
    if (height < 1) height = 1;
    const chars = str
        .split('')
        .filter(i => !i.match(/\s/))
        .map(i => i.charCodeAt(0) > 127 ? i : String.fromCharCode(i.charCodeAt(0) + 65248));

    let lines = new Array(height).fill(0).map(() => []);
    chars.forEach((item, id) => {
        lines[id % height].unshift(item);
    });

    const rets = [];
    while (lines[0].length > width) {
        lines = lines.map((line) => {
            rets.push(line.slice(line.length - width));
            return line.slice(0, line.length - width);
        });
        rets.push([]);
    }
    rets.push(...lines);

    const renderer = rets
        .map(arr => arr.join(''))
        .map(l => l.padStart(width, SPACE))
        .map(i => i.split('').join(SPACE));

    return renderer.join('\n');
}

function random_init() {
    return 
}