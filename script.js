const inputValue = document.getElementById("inputValue");
const searchButton = document.getElementById("searchButton");

const searchEmoji = () =>{
    const value = inputValue.value
    
    const filteredList = emojiList.filter((e)=>{
        if(e.aliases.some((ele => ele.startsWith(value))))
        return true
        if(e.tags.some(ele => ele.startsWith(value)))
            return true
    })

    const searchResult = document.getElementById("searchContainerResult")
    searchResult.innerText = ""
    
    filteredList.map((ele)=>{
        const container = document.createElement("div")
        container.classList.add("main-box")
        const emoji = document.createElement("h1")
        const category = document.createElement("h3")
        const description = document.createElement("p")
        emoji.innerText = ele.emoji
        category.innerText = ele.category
        description.innerText = ele.description
        const a = searchResult.appendChild(emoji)
        const b = searchResult.appendChild(category)
        const c = searchResult.appendChild(description)
        container.append(a)
        container.append(b)
        container.append(c)
        searchResult.appendChild(container)
    })
}

searchButton.addEventListener("click", searchEmoji);
inputValue.addEventListener("keyup", searchEmoji)
window.onload = () => searchEmoji()
