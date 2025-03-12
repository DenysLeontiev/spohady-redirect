function redirectToNewDomain(url) {
    const newBase = "https://spohady.azurewebsites.net"; // https://spohady.azurewebsites.net
    try {
        const parsedUrl = new URL(url);
        const newUrl = newBase + parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
        console.log(newUrl);
        
        window.location.href = newUrl; // Redirect to the new URL
    } catch (error) {
        console.error("Invalid URL", error);
    }
}

let outputUrl = "https://www.spohady.com";

redirectToNewDomain(outputUrl);
