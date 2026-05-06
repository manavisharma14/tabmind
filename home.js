chrome.tabs.query({}, (tabs) => {
    const countElement = document.getElementById("tab-count");

    countElement.textContent = `You have ${tabs.length} tabs open`;

    const tabList = document.getElementById("tab-list");

    tabs.forEach((tab) => {
        const listItem = document.createElement("li");
        // set tab title
        listItem.textContent = tab.title;

        // add item to list
        tabList.appendChild(listItem);
    })
})