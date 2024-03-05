# ChatGPT arc context menu search

Search selected text using ChatGPT on arc browser

# Installation

- Navigate to [openai](https://chat.openai.com) and on arc browser add [chat_gpt_boost.js](/chat_gpt_boost.js) code
- Create a global boost for every page and add by going to the [boost editor](arc://boost/new) and adding [global_boost.js](/global_boost.js) code to background.js file
- Rename global boost to ChatGPT context menu

## Optional

To set logo images for the extension:

- Navigate to your list of [extensions](arc://extensions/) and click on details for ChatGPT context menu
- Look for "Loaded from" folder inside of "Source" and open it
- Add Logos in this repo to that folder
- Modify manifest.json by pasting this at the end:

```json
"icons": {
    "16" : "Logo16.png",
    "48" : "Logo48.png",
    "128": "Logo128.png"
}
```

You should now see images on the context menu

# Usage

- Select text and right click to show the context menu
- Click on "Ask ChatGPT"

# Demo
