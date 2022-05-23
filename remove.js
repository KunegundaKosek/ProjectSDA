const el1 = document.getElementById("#el1")
const el = document.getElementById("#el");
const btn = document.querySelector(".article-list__btn");

btn.addEventListener("click", e => {
    parent.removeChild(el);

    el.parentElement.removeChild(el);

});