function replaceBeforeThirdSlash(url, newDomain) {
    return url.replace(/^(?:[^\/]*\/){2}[^\/]*/, newDomain);
}

const updatedUrl = replaceBeforeThirdSlash("https://www.spohady.com/", "https://spohady.azurewebsites.net");

console.log(updatedUrl);

// window.location.href = updatedUrl;
window.location.replace(updatedUrl);
