async function queryEntry(question) {
    let input = document.querySelector(".flex-col .items-center .flex-col #prompt-textarea");
    input.textContent = question;
    setTimeout(() => {
        let submit = document.querySelector(".items-center .flex-col .text-white:has(.text-white)");
        submit.click();
    }, 50);
}

async function fillQuery() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let question = params.question;
    if (!question) {
        return;
    }
    window.onload = (event) => {
        setTimeout(() => queryEntry(question), 100)
    };
}
fillQuery();