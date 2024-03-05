async function queryEntry(question) {
    const input = document.querySelector("#prompt-textarea");
    input.textContent = question;
    input.dispatchEvent(new Event('input', {bubbles: true}))
    setTimeout(() => {
        const submit = document.querySelector("#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.w-full.pt-2.md\\:pt-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:w-\\[calc\\(100\\%-\\.5rem\\)\\] > form > div > div.flex.w-full.items-center > div > button");
        submit.click();
    }, 50);
}

async function fillQuery() {
    //Fetch query from url
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let question = params.question;
    if (!question) {
        return;
    }
    //Document load status check
    window.onload = (event) => {
        setTimeout(() => queryEntry(question), 100)
    };
}
fillQuery();