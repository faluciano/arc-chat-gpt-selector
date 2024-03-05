async function queryEntry(question) {
    const input = document.querySelector("#prompt-textarea");
    input.textContent = question;
    input.dispatchEvent(new Event('input', {bubbles: true}))
    setTimeout(() => {
        const submit = document.querySelector("[data-testid=send-button");
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