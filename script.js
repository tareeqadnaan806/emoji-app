const inputValue = document.getElementById("inputValue");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", ()=>{
    const value = inputValue.value
    console.log(value);
});
