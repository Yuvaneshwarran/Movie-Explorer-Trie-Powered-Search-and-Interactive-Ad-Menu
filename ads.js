const items = [
    "interstellar",
    "oppenheimer",
    "inception",
    "indiana jones",
    "jurassic park",
    "jurassic world",
    "oblivion",
    "avengers endgame"
];

const root = new makeNode('\0');
for (const item of items)
    add(item, 0, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
    const str = e.target.value;
    const predictions = str ? search(str, 0, root) : [];

    list.innerHTML = "";
    for (const prediction of predictions) {
        list.innerHTML += `<li class="list-group-item clickable" data-page="${prediction}">${prediction}</li>`;
    }
}

function handleClick(e) {
    const text = e.innerHTML;
    text_box.value = text;
}

function handleEnterKey(e) {
    if (e.key === "Enter") {
        const selectedListItem = document.querySelector(".list-group-item.selected");
        if (selectedListItem) {
            const selectedPage = selectedListItem.getAttribute("data-page");
            window.location.href = `${selectedPage}.html`;
        }
    }
}

text_box.addEventListener("keyup", handler);
text_box.addEventListener("keydown", handleEnterKey);

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("list-group-item")) {
        const selectedListItem = document.querySelector(".list-group-item.selected");
        if (selectedListItem) {
            selectedListItem.classList.remove("selected");
        }
        e.target.classList.add("selected");
        const text = e.target.innerHTML;
        text_box.value = text;
    }
});