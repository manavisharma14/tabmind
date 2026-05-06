chrome.tabs.query({}, (tabs) => {

    //update tab count
    const countElement = document.getElementById("tab-count");

    countElement.textContent = `You have ${tabs.length} tabs open`;

    const tabList = document.getElementById("tab-list");

    // loop through tabs
    tabs.forEach((tab) => {
        // create list item
        const listItem = document.createElement("li");
        // set tab title
        listItem.textContent = tab.createContent("li");

        // add item to list
        tabList.appendChild(listItem);
    })
})