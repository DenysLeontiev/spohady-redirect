let currentUrl = window.location.href;

let resultUrl = "https://spohady.azurewebsites.net";

function replaceBeforeThirdSlash(url, newDomain) {
    return url.replace(/^(?:[^\/]*\/){2}[^\/]*/, newDomain);
}

const updatedUrl = replaceBeforeThirdSlash("https://www.spohady.com/", "https://spohady.azurewebsites.net");

window.location.href = updatedUrl;
