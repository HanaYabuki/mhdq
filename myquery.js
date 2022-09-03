const $ = function (kw) {
    switch (kw[0]) {
        case '#':
            return document.getElementById(kw.substring(1));
        case '.':
            return document.getElementsByClassName(kw.substring(1));
        default:
            return undefined;
    }
}
$.ajax = function (url, callback) {
    const xmlhttp = window.XMLHttpRequest 
        ? new XMLHttpRequest() 
        : new ActiveXObject('Microsoft.XMLHTTP');

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //console.log(200);
            //console.log(this.responseText);
            callback(this.responseText);
        }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}