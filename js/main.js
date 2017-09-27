const Key = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

const screens = [...document.querySelectorAll(`template`)];
const mainScreen = document.querySelector(`.main`);
const lastScreenIndex = screens.length - 1;
const firstScreenIndex = 0;

let currentScreenIndex = 0;

const getScreenByIndex = (index) => screens[index].content.cloneNode(true);

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
};

const changeScreen = (index) => {
  const screen = getScreenByIndex(index);
  showScreen(screen);
};

const setUpListeners = () => {
  document.addEventListener(`keydown`, onDocumentKeydown);
};

const onDocumentKeydown = (e) => {
  if (!e.altKey) {
    return;
  }

  if (e.keyCode === Key.ARROW_LEFT) {
    currentScreenIndex = currentScreenIndex === 0
      ? lastScreenIndex
      : currentScreenIndex - 1;

    changeScreen(currentScreenIndex);
  }

  if (e.keyCode === Key.ARROW_RIGHT) {
    currentScreenIndex = currentScreenIndex === lastScreenIndex
      ? firstScreenIndex
      : currentScreenIndex + 1;

    changeScreen(currentScreenIndex);
  }
};

setUpListeners();
showScreen(getScreenByIndex(currentScreenIndex));
