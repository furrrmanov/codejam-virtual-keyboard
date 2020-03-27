const body = document.querySelector("body");
/*div обертка калькулятора*/
const grid = document.createElement("div");
grid.classList.add("grid");
body.append(grid);

/* обертка клавиш*/
const gridKey = document.createElement("div");
gridKey.classList.add("gridKey");

/* поле ввода */
const textAr = document.createElement("textarea");
textAr.value = "";
grid.append(textAr);
grid.append(gridKey);

/* конструктор создания  клаивиш(кроме tab,shift,caps,cntrl,entr,backspase) */
class Key {
  constructor(text) {
    this.but = document.createElement("button");
    this.but.classList.add("key");
    this.but.classList.add("allkey");
    this.pressed = false;
    this.but.textContent = text;
    gridKey.append(this.but);
  }
}

let KeyYo = new Key("`");
let Key1 = new Key("1");
let Key2 = new Key("2");
let Key3 = new Key("3");
let Key4 = new Key("4");
let Key5 = new Key("5");
let Key6 = new Key("6");
let Key7 = new Key("7");
let Key8 = new Key("8");
let Key9 = new Key("9");
let Key0 = new Key("0");
let KeyMinus = new Key("-");
let KeyRes = new Key("=");

/* клавиша BackSpace */
let KeyBackspace = document.createElement("button");
KeyBackspace.classList.add("backSpace");
KeyBackspace.classList.add("act");

KeyBackspace.textContent = "Backspace";
gridKey.append(KeyBackspace);

/*клавиша Tab */
let KeyTab = document.createElement("button");
KeyTab.classList.add("tab");
KeyTab.classList.add("act");
KeyTab.textContent = "Tab";
gridKey.append(KeyTab);

let KeyQ = new Key("q");
let KeyW = new Key("w");
let KeyE = new Key("e");
let KeyR = new Key("r");
let KeyT = new Key("t");
let KeyY = new Key("y");
let KeyU = new Key("u");
let KeyI = new Key("i");
let KeyO = new Key("o");
let KeyP = new Key("p");
let KeyLeftBracets = new Key("[");
let KeyRigthBracets = new Key("]");
let KeyLefthSlash = new Key("\\");

/*клавиша Del*/
let KeyDel = document.createElement("button");
KeyDel.classList.add("del");
KeyDel.classList.add("act");
KeyDel.textContent = "Del";
gridKey.append(KeyDel);

/*клавиша CapsLk*/
let KeyCapsLk = document.createElement("button");
KeyCapsLk.classList.add("caps");
KeyCapsLk.classList.add("act");
KeyCapsLk.textContent = "CapsLock";
gridKey.append(KeyCapsLk);

let KeyA = new Key("a");
let KeyS = new Key("s");
let KeyD = new Key("d");
let KeyF = new Key("f");
let KeyG = new Key("g");
let KeyH = new Key("h");
let KeyJ = new Key("j");
let KeyK = new Key("k");
let KeyL = new Key("l");
let KeySemiColon = new Key(";");
let KeyQuotes = new Key("'");

/*клавиша Enter*/
let KeyEnter = document.createElement("button");
KeyEnter.classList.add("enter");
KeyEnter.classList.add("act");
KeyEnter.textContent = "Enter";
gridKey.append(KeyEnter);

/*клавиша LeftShift*/
let KeyLeftShift = document.createElement("button");
KeyLeftShift.classList.add("shift");
KeyLeftShift.classList.add("act");
KeyLeftShift.textContent = "Shift";
gridKey.append(KeyLeftShift);

let KeyZ = new Key("z");
let KeyX = new Key("x");
let KeyC = new Key("c");
let KeyV = new Key("v");
let KeyB = new Key("b");
let KeyN = new Key("n");
let KeyM = new Key("m");
let KeyComma = new Key(",");
let KeyPoint = new Key(".");
let KeyRigthSlash = new Key("/");
let KeyArrowUp = new Key("▲");

/*клавиша RightShift*/
let KeyRightShift = document.createElement("button");
KeyRightShift.classList.add("shift");
KeyRightShift.classList.add("act");
KeyRightShift.style.marginLeft = "6px";
KeyRightShift.textContent = "Shift";
gridKey.append(KeyRightShift);

/*клавиша LeftCtrl*/
let KeyLeftCtrl = document.createElement("button");
KeyLeftCtrl.classList.add("ctrl");
KeyLeftCtrl.classList.add("act");
KeyLeftCtrl.textContent = "Ctrl";
gridKey.append(KeyLeftCtrl);

/*клавиша Win*/
let KeyWin = document.createElement("button");
KeyWin.classList.add("win");
KeyWin.classList.add("act");
KeyWin.textContent = "Win";
gridKey.append(KeyWin);

/*клавиша LeftAlt*/
let KeyLeftAlt = document.createElement("button");
KeyLeftAlt.classList.add("alt");
KeyLeftAlt.classList.add("act");
KeyLeftAlt.textContent = "Alt";
gridKey.append(KeyLeftAlt);

/*клавиша Space*/
let KeySpace = document.createElement("button");
KeySpace.classList.add("space");
KeySpace.classList.add("act");
KeySpace.textContent = "''";
gridKey.append(KeySpace);

/*клавиша RightAlt*/
let KeyRightAlt = document.createElement("button");
KeyRightAlt.classList.add("alt");
KeyRightAlt.classList.add("act");
KeyRightAlt.textContent = "Alt";
gridKey.append(KeyRightAlt);

let KeyArrowLeft = new Key("◄");
let KeyArrowDown = new Key("▼");
let KeyArrowRight = new Key("►");

/*клавиша RightCtrl*/
let KeyRightCtrl = document.createElement("button");
KeyRightCtrl.classList.add("ctrl");
KeyRightCtrl.classList.add("act");
KeyRightCtrl.style.cssText = `margin-left:6px;
width:60px
`;
KeyRightCtrl.textContent = "Ctrl";
gridKey.append(KeyRightCtrl);

/*___________________________________________________*/


/*  Mouse action__________________________________________________________________________________________________*/

let arrActionKey = gridKey.querySelectorAll(".act");
arrActionKey.forEach(item => item.classList.add("allkey"));

/* функия вывода информации с клавиш */
gridKey.addEventListener("click", handler);
function handler(event) {
  const target = event.target;
  //const button = target.closest('button')
  if (target.classList.contains("key"))
    return (textAr.value += target.textContent);
}

/* анимация нажатия на клавишу */
gridKey.addEventListener("mousedown", hahdlerKeyDown);
function hahdlerKeyDown(event) {
  const cursDown = event.target;
  const array = gridKey.querySelectorAll(".allkey");
  return array.forEach(item =>
    item.textContent === cursDown.textContent
      ? item.classList.add("active")
      : false
  );
}

gridKey.addEventListener("mouseup", hahdlerKeyUp);
function hahdlerKeyUp(event) {
  const cursUp = event.target;
  cursUp.classList.remove("active");
}
/* функиция BackSpace */
gridKey.addEventListener("click", handBackspace);
function handBackspace(event) {
  const str = event.target;
  if (str.textContent === "Backspace")
    return (textAr.value = textAr.value.slice(0, -1));
}

/*функция пробела*/
gridKey.addEventListener("click", handSpace);
function handSpace(event) {
  const str = event.target;
  if (str.textContent === "''") return (textAr.value = textAr.value += " ");
}



/* Keyboard_________________________________________________________________________________________________________*/

/* Вывод клафиш с физ. клавиатуры*/
document.addEventListener("keydown", keyboardKeyDown);
function keyboardKeyDown(event) {
  const keyboarKey = event.key;
  if (keyboarKey !== "Shift" && keyboarKey !== "Backspace"&& keyboarKey !== 'Tab'&& keyboarKey !== 'CapsLock'&& keyboarKey !== 'Control'&& keyboarKey !== 'Ctrl' && keyboarKey !== 'Meta'&& keyboarKey !== 'Alt'&& keyboarKey !== 'Enter'&& keyboarKey !== 'Delete') {
    textAr.value += keyboarKey;
  }
  const array = document.querySelectorAll(".allkey");
  array.forEach(item =>
    item.textContent === keyboarKey ? item.classList.add("active") : false
  );
}

document.addEventListener("keyup", KeyboardKeyUp);
function KeyboardKeyUp(event) {
  const keyboarKey = event.key;
  const array = document.querySelectorAll(".allkey");
  array.forEach(item =>
    item.textContent === keyboarKey ? item.classList.remove("active") : false
  );
}

/* Backspace___________________________________________*/
document.addEventListener('keydown',keyboardBackSpace)
function keyboardBackSpace (event){
  const backSpace = event.key
  if(backSpace=== "Backspace"){
    textAr.value = textAr.value.slice(0,-1)
  }
}

/* Space___________________________________________________*/
gridKey.addEventListener("keydown", KeyboardSpace);
function KeyboardSpace(event) {
  const space = event.key;
  if (space === "''") return (textAr.value = textAr.value += " ");
}


gridKey.addEventListener("keydown", KeyboardEnter);
function KeyboardEnter(event) {
  const enter = event.key;
  if (enter === 'Enter' ) return textAr.value = textAr.value;
}
