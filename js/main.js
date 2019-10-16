let newTitle = "";
for (let i = 0; i < 5; i++) {
    newTitle += document.title + " - ";
}
document.title = newTitle;

setInterval(() => {
    document.title += document.title[0];
    document.title = document.title.substr(1);
}, 250);