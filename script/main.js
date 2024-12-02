const button = document.getElementById("color-btn")

button.addEventListener("click", () => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    const i = Math.floor(Math.random() * colorArray.length)

    const rainbow = document.getElementById("rainbow")
    rainbow.style.backgroundColor = colorArray[i]
})

const addButton = document.getElementById("add-btn")

addButton.addEventListener("click", () => {
    const input = document.getElementById("item-input")
    const list = document.getElementById("listItem").firstElementChild
    const li = document.createElement("li")

    li.textContent = input.value
    list.appendChild(li)
    console.log(list)
})

