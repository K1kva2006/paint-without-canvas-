// crate / remove figure start

const figureMode = document.getElementById("figureMode");
const deleteFigureMode = document.getElementById("deleteFigureMode");
const figureWidth = document.getElementById("figureWidth");
const figureHeight = document.getElementById("figureHeight");
const figureBorder = document.getElementById("figureBorder");
const figureColor = document.getElementById("figureColor");
const paintMode = document.getElementById("paintMode");
const paintSize = document.getElementById("paintSize");
const paintColor = document.getElementById("paintColor");
const createFigureActive = document.getElementById("createFigureActive");
const paintModeActive = document.getElementById("paintModeActive");
const deleteFigureModeActive = document.getElementById(
    "deleteFigureModeActive"
);

let figureModeSwitch = false;
let removeMode = false;
let paintModeSwtich = false;
// create figure start
const figure = document.createElement("div");
document.body.appendChild(figure);
figure.style.display = "none";
figure.style.position = "absolute";

figureMode.addEventListener("click", () => {
    figureModeSwitch = !figureModeSwitch;
    if (figureModeSwitch) {
        createFigureActive.classList.add("active");
        createFigureActive.classList.remove("none");

        deleteFigureModeActive.classList.remove("active");
        deleteFigureModeActive.classList.add("none");

        paintModeActive.classList.remove("active");
        paintModeActive.classList.add("none");

        figure.style.display = "inline-block";
        removeMode = false;
        paintModeSwtich = false;
    } else if (!figureModeSwitch) {
        createFigureActive.classList.remove("active");
        createFigureActive.classList.add("none");
        figure.style.display = "none";
    }
});
document.addEventListener("mousemove", (e) => {
    if (figureModeSwitch) {
        figure.style.width = figureWidth.value + "px";
        figure.style.height = figureHeight.value + "px";
        figure.style.borderRadius = figureBorder.value + "px";
        figure.style.background = figureColor.value;
        figure.style.transform = `translate(${
            e.pageX - figure.offsetWidth / 2
        }px, ${e.pageY - figure.offsetHeight / 2}px)`;
    }
});
document.addEventListener("click", (e) => {
    if (figureModeSwitch) {
        const setFigure = document.createElement("span");
        document.body.appendChild(setFigure);
        if (e.pageY < 100) {
            setFigure.remove();
        }
        setFigure.style.position = "absolute";
        setFigure.style.display = "inline-block";
        setFigure.style.width = figureWidth.value + "px";
        setFigure.style.height = figureHeight.value + "px";
        setFigure.style.borderRadius = figureBorder.value + "px";
        setFigure.style.background = figureColor.value;

        setFigure.style.transform = `translate(${
            e.pageX - setFigure.offsetWidth / 2
        }px, ${e.pageY - setFigure.offsetHeight / 2}px)`;
    }
});
// create figure end

// remove mode start
const deleteText = document.createElement("div");
deleteText.textContent = "click on the figure or pixel to remove it";
document.body.appendChild(deleteText);
deleteText.style.display = "none";
deleteText.style.position = "absolute";
deleteText.style.zIndex = 3;
deleteText.style.cursor = "pointer";

deleteFigureMode.addEventListener("click", () => {
    removeMode = !removeMode;

    if (removeMode) {
        deleteFigureModeActive.classList.add("active");
        deleteFigureModeActive.classList.remove("none");

        paintModeActive.classList.remove("active");
        paintModeActive.classList.add("none");

        createFigureActive.classList.remove("active");
        createFigureActive.classList.add("none");

        deleteText.style.display = "inline-block";
        figureModeSwitch = false;
        paintModeSwtich = false;
    } else {
        deleteFigureModeActive.classList.remove("active");
        deleteFigureModeActive.classList.add("none");
        deleteText.style.display = "none";
    }
});

document.addEventListener("mousemove", (e) => {
    if (removeMode) {
        deleteText.style.transform = `translate(${
            e.pageX - deleteText.offsetWidth / 2
        }px, ${e.pageY - 25}px )`;
    }
});
document.addEventListener("click", (e) => {
    if (removeMode) {
        if (e.target.tagName == "SPAN") {
            e.target.remove();
        }
    }
});

// remove mode end

// crate / remove figure end

// paint mode start
let drawPixel = false;

const pixel = document.createElement("div");
document.body.appendChild(pixel);
pixel.style.display = "none";

paintMode.addEventListener("click", (e) => {
    paintModeSwtich = !paintModeSwtich;

    if (paintModeSwtich) {
        paintModeActive.classList.add("active");
        paintModeActive.classList.remove("none");

        createFigureActive.classList.remove("active");
        createFigureActive.classList.add("none");

        deleteFigureModeActive.classList.remove("active");
        deleteFigureModeActive.classList.add("none");

        pixel.style.display = "inline-block";
        figureModeSwitch = false;
        removeMode = false;
    }
    if (!paintModeSwtich) {
        paintModeActive.classList.remove("active");
        paintModeActive.classList.add("none");
    }
});
document.addEventListener("mousedown", () => {
    drawPixel = true;
});
document.addEventListener("mouseup", () => {
    drawPixel = false;
});
document.addEventListener("mousemove", (e) => {
    if (paintModeSwtich) {
        pixel.style.position = "absolute";
        pixel.style.width = paintSize.value + "px";
        pixel.style.height = paintSize.value + "px";
        pixel.style.background = paintColor.value;
        pixel.style.transform = `translate(${
            e.pageX - pixel.offsetWidth / 2
        }px, ${e.pageY - pixel.offsetHeight / 2}px)`;
        if (drawPixel) {
            const setPixel = document.createElement("span");
            document.body.appendChild(setPixel);
            setPixel.style.position = "absolute";
            setPixel.style.width = paintSize.value + "px";
            setPixel.style.height = paintSize.value + "px";
            setPixel.style.background = paintColor.value;
            setPixel.style.transform = `translate(${
                e.pageX - setPixel.offsetWidth / 2
            }px, ${e.pageY - setPixel.offsetHeight / 2}px)`;
        }
    }
});

// paint mode end
