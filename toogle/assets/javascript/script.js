const elements = [];
const title_h1 = document.getElementById("page-title")
elements.push(document.getElementById("mode-selector"));
elements.push(document.querySelector("footer"));
elements.push(document.querySelector("body"));

const button = elements[0];

const darkModeToggle = function() {
    elements.forEach((element) => {
        toggleClass(element, "dark-mode");
    });

    changeText();
}

function toggleClass(element, elementClass) {
    if (!element instanceof HTMLElement)
        throw new Error("Elemento inválido!");

    element.classList.toggle(elementClass);

    // let list = element.classList;
    // if (list.contains(elementClass))
    //     list.remove(elementClass);
    // else
    //     list.add(elementClass);

}

function changeText() {
    if (elements[0].classList.contains("dark-mode")) {
        button.innerHTML = 'Light Mode';
        title_h1.innerText = 'Dark Mode ON'
        return;
    }

    button.innerText = 'Dark Mode';
    title_h1.innerText = 'Dark Mode OFF'
}

button.addEventListener("click", darkModeToggle);