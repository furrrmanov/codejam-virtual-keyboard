const body = document.querySelector('body');
// Description
const description = document.createElement('li');
description.classList.add('description');
description.textContent = 'Смена языка Ctrl+Shift (создавалось для Windows)';
body.append(description);
// обертка калькулятора
const grid = document.createElement('div');
grid.classList.add('grid');
body.append(grid);
//  обертка клавиш
const gridKey = document.createElement('div');
gridKey.classList.add('gridKey');
//  поле ввода
const textAr = document.createElement('textarea');
textAr.value = '';
grid.append(textAr);
grid.append(gridKey);
// конструктор создания  клаивиш(кроме tab,shift,caps,cntrl,entr,backspase)
class Key {
  constructor(text) {
    this.but = document.createElement('button');
    this.but.classList.add('key');
    this.but.classList.add('allkey');
    this.lang = false;
    this.but.textContent = text;
    if (this.but.textContent === 'Backspace') {
      this.but.classList.remove('key');
      this.but.classList.add('backSpace');
      this.but.classList.add('act');
    }
    if (this.but.textContent === 'Tab') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('tab');
    }
    if (this.but.textContent === 'Delete') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('del');
    }
    if (this.but.textContent === 'CapsLock') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('caps');
    }
    if (this.but.textContent === 'Enter') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('enter');
    }
    if (this.but.textContent === 'Shift') {
      this.but.classList.remove('key');
      // this.but.classList.add('act');
      this.but.classList.add('shift');
    }
    if (this.but.textContent === 'Ctrl') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('ctrl');
    }
    if (this.but.textContent === 'Eng' || this.but.textContent === 'Ru') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('win');
    }
    if (this.but.textContent === 'Alt') {
      this.but.classList.remove('key');
      // this.but.classList.add('act');
      this.but.classList.add('alt');
    }
    if (this.but.textContent === 'space') {
      this.but.classList.remove('key');
      // this.but.classList.add('act');
      this.but.classList.add('space');
    }
    if (this.but.textContent === '▲' || this.but.textContent === '◄' || this.but.textContent === '▼' || this.but.textContent === '►') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('arrow');
    }
    gridKey.append(this.but);
  }
}

const KeyObj = {
  KeyKov: new Key('`'),
  Key1: new Key('1'),
  Key2: new Key('2'),
  key3: new Key('3'),
  Key4: new Key('4'),
  Key5: new Key('5'),
  key6: new Key('6'),
  Key7: new Key('7'),
  Key8: new Key('8'),
  key9: new Key('9'),
  KeyNull: new Key('0'),
  KeyMinus: new Key('-'),
  keyRes: new Key('='),
  KeyBackspace: new Key('Backspace'),
  KeyTab: new Key('Tab'),
  KeyQ: new Key('q'),
  KeyW: new Key('w'),
  keyE: new Key('e'),
  KeyR: new Key('r'),
  KeyT: new Key('t'),
  keyY: new Key('y'),
  KeyU: new Key('u'),
  KeyI: new Key('i'),
  keyO: new Key('o'),
  KeyP: new Key('p'),
  keyBrL: new Key('['),
  KeyBrR: new Key(']'),
  KeyESc: new Key('\\'),
  keyDEl: new Key('Delete'),
  keyCaps: new Key('CapsLock'),
  KeyA: new Key('a'),
  KeyS: new Key('s'),
  keyD: new Key('d'),
  KeyF: new Key('f'),
  KeyG: new Key('g'),
  keyH: new Key('h'),
  KeyJ: new Key('j'),
  KeyK: new Key('k'),
  keyL: new Key('l'),
  KeyPoint1: new Key(';'),
  KeyPoint: new Key("'"),
  KeyEnter: new Key('Enter'),
  keyLeftShift: new Key('Shift'),
  keyZ: new Key('z'),
  keyX: new Key('x'),
  keyC: new Key('c'),
  keyV: new Key('v'),
  keyB: new Key('b'),
  keyN: new Key('n'),
  keyM: new Key('m'),
  keyComma: new Key(','),
  keyDote: new Key('.'),
  keySlash: new Key('/'),
  KeyArrowUp: new Key('▲'),
  keyRightShift: new Key('Shift'),
  KeyLeftCtrl: new Key('Ctrl'),
  KeyWin: new Key('Eng'),
  KeyLeftAlt: new Key('Alt'),
  KeySpace: new Key('space'),
  KeyRightAlt: new Key('Alt'),
  KeyLeftArrow: new Key('◄'),
  KeyDownArrow: new Key('▼'),
  KeyRightArrow: new Key('►'),
  KeyRightCtrl: new Key('Ctrl'),
};

function initKey(obj) {
  return obj;
}
initKey(KeyObj);


// Ru_______________________________________________________________________________
const KeyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
// RU + shift_______________________________________________________________________
const KeyRuShift = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];
// Eng______________________________________________________________________________
const KeyEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
// Eng + shift______________________________________________________________________
const KeyEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

document.querySelectorAll('.shift')[1].style.marginLeft = '6px';
document.querySelectorAll('.ctrl')[1].style.marginLeft = '6px';

// function replace Language
function ReplaceLang(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].textContent = a[i];
  }
}
// function UpperCase
function LangUpperCase(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].textContent = a[i].toUpperCase();
  }
}
// function LowerCase
function LangLowerCase(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].textContent = a[i];
  }
}

// function Focus
function setFocus() {
  textAr.focus();
}
setFocus();

// Replace lanuage_______________________________________________________________________________
const KeyLang = document.querySelector('.win');

// Mouse Shift Down_______________________________________________________________________________
function MouseShiftDown(event) {
  const { target } = event;
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    LangUpperCase(KeyEngShift);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    LangUpperCase(KeyRuShift);
  }
}
gridKey.addEventListener('mousedown', MouseShiftDown);

function MouseShiftUp(event) {
  const { target } = event;
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    LangLowerCase(KeyEng);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    LangLowerCase(KeyRu);
  }
}
gridKey.addEventListener('mouseup', MouseShiftUp);

// Keyboard Shift_______________________________________________________________________________
const LeftSHift = document.querySelectorAll('.shift')[0];
const RightShift = document.querySelectorAll('.shift')[1];

function KeyboardShiftDown(event) {
  const { code } = event;
  if (code === 'ShiftLeft' && !gridKey.classList.contains('Rus')) {
    LeftSHift.classList.add('active');
    LangUpperCase(KeyEngShift);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    LeftSHift.classList.add('active');
    LangUpperCase(KeyRuShift);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    RightShift.classList.add('active');
    LangUpperCase(KeyEngShift);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    RightShift.classList.add('active');
    LangUpperCase(KeyRuShift);
  }
}
document.addEventListener('keydown', KeyboardShiftDown);

function KeyboardShiftUp(event) {
  const { code } = event;
  if (code === 'ShiftLeft' && !gridKey.classList.contains('Rus')) {
    LeftSHift.classList.remove('active');
    LangLowerCase(KeyEng);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    LeftSHift.classList.remove('active');
    LangLowerCase(KeyRu);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    RightShift.classList.remove('active');
    LangLowerCase(KeyEng);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    RightShift.classList.remove('active');
    LangLowerCase(KeyRu);
  }
}
document.addEventListener('keyup', KeyboardShiftUp);

// Mouse CpasLock _______________________________________________________________________________
let caps = false;
function MouseCapsDown(event) {
  const codes = event.target;
  if (codes.textContent === 'CapsLock') {
    caps = true;
    codes.classList.toggle('pressed');
  }
  if (caps === true && !codes.classList.contains('pressed')) {
    const val = document.querySelectorAll('.key');
    for (let i = 0; i < val.length; i += 1) {
      val[i].textContent = val[i].textContent.toLowerCase();
    }
  }
}
gridKey.addEventListener('click', MouseCapsDown);

function MouseCapsUp(event) {
  const codes = event.target;
  if (codes.textContent === 'CapsLock' && codes.classList.contains('pressed')) {
    caps = false;
    const val = document.querySelectorAll('.key');
    for (let i = 0; i < val.length; i += 1) {
      val[i].textContent = val[i].textContent.toUpperCase();
    }
  }
}
gridKey.addEventListener('click', MouseCapsUp);

// Key output function__________________________________________________________________________
function KeyOutput(event) {
  const { target } = event;
  if (target.classList.contains('key')) {
    setFocus();
    textAr.value += target.textContent;
  }
}
gridKey.addEventListener('click', KeyOutput);

// Animation (Mouse) function___________________________________________________________________
function KeyAnimationDown(event) {
  const { target } = event;
  if (target.classList.contains('allkey')) {
    target.classList.add('active');
  }
}
gridKey.addEventListener('mousedown', KeyAnimationDown);

function KeyAnimationUp(event) {
  const { target } = event;
  target.classList.remove('active');
}
gridKey.addEventListener('mouseup', KeyAnimationUp);

// Animation (Keyboard) function_________________________________________________________________
function keyboardKeyDown(event) {
  const keyboardKey = event.key;
  if (
    keyboardKey !== 'Shift'
    && keyboardKey !== 'Backspace'
    && keyboardKey !== 'Tab'
    && keyboardKey !== 'CapsLock'
    && keyboardKey !== 'Control'
    && keyboardKey !== 'Ctrl'
    && keyboardKey !== 'Meta'
    && keyboardKey !== 'Alt'
    && keyboardKey !== 'AltGraph'
    && keyboardKey !== 'Enter'
    && keyboardKey !== 'Delete'
    && keyboardKey !== 'ArrowLeft'
    && keyboardKey !== 'ArrowRight'
    && keyboardKey !== 'ArrowUp'
    && keyboardKey !== 'ArrowDown'
  ) {
    setFocus();
    textAr.value += keyboardKey.slice(0, -1);
  }
  const array = document.querySelectorAll('.key');
  array.forEach((item) => (item.textContent === keyboardKey ? item.classList.add('active') : false));
}
document.addEventListener('keydown', keyboardKeyDown);


function KeyboardKeyUp(event) {
  const keyboarKey = event.key;
  const array = document.querySelectorAll('.key');
  array.forEach((item) => (item.textContent === keyboarKey ? item.classList.remove('active') : false));
}
document.addEventListener('keyup', KeyboardKeyUp);

// Animation functional keys_____________________________________________________________________
function FuncKeysDown(event) {
  const { key } = event;
  const arr = document.querySelectorAll('.act');
  arr.forEach((item) => {
    if (item.textContent === key) {
      item.classList.add('active');
    }
  });
}
document.addEventListener('keydown', FuncKeysDown);

function FuncKeysUp(event) {
  const { key } = event;
  const arr = document.querySelectorAll('.act');
  arr.forEach((item) => {
    if (item.textContent === key) {
      item.classList.remove('active');
    }
  });
}
document.addEventListener('keyup', FuncKeysUp);

// BackSpace (Mouse) function______________________________________________________________________
function MouseBackSpaceDown(event) {
  const { target } = event;
  if (target.textContent === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('click', MouseBackSpaceDown);

// BackSpace (keyboard) function _________________________________________________________________
function KeyboardBackSpaceDown(event) {
  const { code } = event;
  if (code === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('keydown', KeyboardBackSpaceDown);

// Space function (mouse) _________________________________________________________________________
function handSpace(event) {
  const str = event.target;
  if (str.textContent === 'space') {
    textAr.value += ' ';
    setFocus();
  }
}
gridKey.addEventListener('click', handSpace);

// Space function (keyboard)
const space = document.querySelector('.space');
function KeyboardSpaceDown(event) {
  const cod = event.code;
  if (cod === 'Space') {
    space.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardSpaceDown);

function KeyboardSpaceUp(event) {
  const cod = event.code;
  if (cod === 'Space') {
    space.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardSpaceUp);

// CapsLock Keyboard ______________________________________________________________________________

function KeyboardCapsDown(event) {
  const codes = event.code;
  if (codes === 'CapsLock') {
    caps = true;
    document.querySelector('.caps').classList.toggle('pressed');
  }
  if (caps === true && codes === 'CapsLock') {
    const val = document.querySelectorAll('.key');
    for (let i = 0; i < val.length; i += 1) {
      val[i].textContent = val[i].textContent.toUpperCase();
    }
  }
}
document.addEventListener('keydown', KeyboardCapsDown);

function KeyboardCapsUp(event) {
  const codes = event.code;
  const but = document.querySelector('.caps');
  if (caps === true && codes === 'CapsLock' && !but.classList.contains('pressed')) {
    caps = false;
    const val = document.querySelectorAll('.key');
    for (let i = 0; i < val.length; i += 1) {
      val[i].textContent = val[i].textContent.toLowerCase();
    }
  }
}
document.addEventListener('keydown', KeyboardCapsUp);

// Ctrl________________________________________________________________________________
const KeyLeftCtrl = document.querySelectorAll('.ctrl')[0];
const KeyRightCtrl = document.querySelectorAll('.ctrl')[1];

function KeyboardCtrltDown(event) {
  const ctrl = event.code;
  if (ctrl === 'ControlLeft') {
    KeyLeftCtrl.classList.add('active');
  }
  if (ctrl === 'ControlRight') {
    KeyRightCtrl.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardCtrltDown);

function KeyboardCtrltUp(event) {
  const ctrl = event.code;
  if (ctrl === 'ControlLeft') {
    KeyLeftCtrl.classList.remove('active');
  }
  if (ctrl === 'ControlRight') {
    KeyRightCtrl.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardCtrltUp);

function CtrltLeftMouseDown(event) {
  const cursDown = event.target;
  cursDown.classList.add('active');
}
KeyLeftCtrl.addEventListener('mousedown', CtrltLeftMouseDown);

function CtrltRightMouseDown(event) {
  const cursDown = event.target;
  cursDown.classList.add('active');
}
KeyRightCtrl.addEventListener('mousedown', CtrltRightMouseDown);

// Alt keyboard__________________________________________________________________________________
const KeyLeftAlt = document.querySelectorAll('.alt')[0];
const KeyRightAlt = document.querySelectorAll('.alt')[1];

function KeyboardAltDown(event) {
  const alt = event.code;
  if (event.altKey) {
    event.preventDefault();
  }
  if (alt === 'AltLeft') {
    KeyLeftAlt.classList.add('active');
  }
  if (alt === 'AltRight') {
    KeyRightAlt.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardAltDown);

function KeyboardAltUp(event) {
  const alt = event.code;
  if (alt === 'AltLeft') {
    KeyLeftAlt.classList.remove('active');
  }
  if (alt === 'AltRight') {
    KeyRightAlt.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardAltUp);


// Delete keyboard___________________________________________________________________
function DeleteKeyboardDown(event) {
  const del = event.code;
  if (del === 'Delete') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('keydown', DeleteKeyboardDown);

// Key arrow__________________________________________________________________________
const arrowUp = document.querySelectorAll('.arrow')[0];
const arrowL = document.querySelectorAll('.arrow')[1];
const arrowDown = document.querySelectorAll('.arrow')[2];
const arrowR = document.querySelectorAll('.arrow')[3];

function KeyboardArrowDown(event) {
  const arrow = event.code;

  if (arrow === 'ArrowLeft') {
    arrowL.classList.add('active');
    textAr.value += '◄';
  }
  if (arrow === 'ArrowUp') {
    arrowUp.classList.add('active');
    textAr.value += '▲';
  }
  if (arrow === 'ArrowRight') {
    arrowR.classList.add('active');
    textAr.value += '►';
  }
  if (arrow === 'ArrowDown') {
    arrowDown.classList.add('active');
    textAr.value += '▼';
  }
}
document.addEventListener('keydown', KeyboardArrowDown);


function KeyboardArrowUp(event) {
  const arrow = event.code;

  if (arrow === 'ArrowLeft') {
    arrowL.classList.remove('active');
  }
  if (arrow === 'ArrowUp') {
    arrowUp.classList.remove('active');
  }
  if (arrow === 'ArrowRight') {
    arrowR.classList.remove('active');
  }
  if (arrow === 'ArrowDown') {
    arrowDown.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardArrowUp);

// Key mouse__________________________________________________________________________
function MouseArrow(event) {
  const arrow = event.target;

  if (arrow.textContent === '◄') {
    textAr.value += '◄';
  }
  if (arrow.textContent === '▲') {
    textAr.value += '▲';
  }
  if (arrow.textContent === '►') {
    textAr.value += '►';
  }
  if (arrow.textContent === '▼') {
    textAr.value += '▼';
  }
}
gridKey.addEventListener('click', MouseArrow);

// Replace language (keyboard)_________________________________________________________
function handler(event) {
  if (event.code === 'ShiftLeft' && event.ctrlKey) {
    gridKey.classList.toggle('Rus');
    KeyLang.textContent = 'Ru';
    ReplaceLang(KeyRu);
  }
}
document.addEventListener('keydown', handler);

function handlerReplaceLang(event) {
  if (event.code === 'ShiftLeft' && event.ctrlKey && gridKey.classList.contains('Rus')) {
    KeyLang.textContent = 'Eng';
    // ReplaceLang(KeyRu);
  }
}
document.addEventListener('keydown', handlerReplaceLang);

function MouseReplaceLang(event) {
  const targ = event.target;
  if (targ.textContent === 'Eng') {
    ReplaceLang(KeyEng);
    KeyLang.textContent = 'Ru';
  } else {
    ReplaceLang(KeyRu);
    KeyLang.textContent = 'Eng';
  }
}
KeyLang.addEventListener('click', MouseReplaceLang);

// function Enter (mouse)
function MouseEnter(event) {
  const targ = event.target;
  if (targ.textContent === 'Enter') {
    textAr.value += '\r\n';
    setFocus();
  }
}
gridKey.addEventListener('click', MouseEnter);

// function Tab(mouse)
function MouseTab(event) {
  const targ = event.target;
  if (targ.textContent === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
gridKey.addEventListener('click', MouseTab);

// function Tab(keyboard)
function KeyboardTab(event) {
  const targ = event.code;
  if (targ === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
document.addEventListener('keydown', KeyboardTab);

// Local Storage(save text in textArea)______________________________________
textAr.value = localStorage.getItem('area');
textAr.oninput = () => {
  localStorage.setItem('area', textAr.value);
};

KeyLang.textContent = localStorage.getItem('lang');
window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', KeyLang.textContent);
});

window.addEventListener('load', () => {
  localStorage.getItem('lang', KeyLang.textContent);
  if (localStorage.getItem('lang', KeyLang.textContent) === 'Eng') {
    ReplaceLang(KeyRu);
  }
  if (localStorage.getItem('lang', KeyLang.textContent) === 'Ru') {
    ReplaceLang(KeyEng);
  }
});
