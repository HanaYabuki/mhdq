const $ = (kw) => {
    switch (kw[0]) {
        case '#':
            return document.getElementById(kw.substring(1));
        case '.':
            return document.getElementsByClassName(kw.substring(1));
        default:
            return undefined;
    }
}