const input = document.getElementById("listNeeded");
const ul = document.getElementById("list");
const select = document.getElementById("colorSelect");

input.addEventListener("input", function() {
    ul.innerHTML = "";  
    const items = input.value.split(","); 
    for(let i = 0; i < items.length; i++){
        const li = document.createElement("li"); 
        li.textContent = items[i].trim();
        ul.appendChild(li); 
    }
});

select.addEventListener("change", function() {
    document.body.style.backgroundColor = select.value;
});
