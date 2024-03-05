chrome.contextMenus.create({
    id: "ChatGPTboost",
    title: "Search with ChatGPT",
    contexts: ["selection"],
    icons: {
        "16": "https://png.pngtree.com/png-clipart/20190515/original/pngtree-instagram-social-media-icon-png-image_3572487.jpg"
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    const selectedText = encodeURIComponent(info.selectionText);
    const url = `https://chat.openai.com/?question=${selectedText}`;
    chrome.tabs.create({url: url});
});