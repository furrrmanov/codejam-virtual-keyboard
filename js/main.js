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

    switch(this.but.textContent) {
      case 'Backspace':
      this.but.classList.remove('key');
      this.but.classList.add('backSpace');
      this.but.classList.add('act');
      break;
      
      case'Tab':
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('tab');
      break;

      case 'Delete':
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('del');
      break;

      case 'CapsLock':
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('caps');
      break;

      case 'Enter':
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('enter');
      break;
      
      case 'Shift':
      this.but.classList.remove('key');
      this.but.classList.add('shift');
      break;

      case 'Ctrl':
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('ctrl');
      break;

      case 'Alt':
      this.but.classList.remove('key');
      this.but.classList.add('alt');
      break;

      case 'space':
      this.but.classList.remove('key');
      this.but.classList.add('space');
      break;

    } 
   
    if (this.but.textContent === 'Eng' || this.but.textContent === 'Ru') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('win');
    }
   
    if (this.but.textContent === '▲' || this.but.textContent === '◄' || this.but.textContent === '▼' || this.but.textContent === '►') {
      this.but.classList.remove('key');
      this.but.classList.add('act');
      this.but.classList.add('arrow');
    }
    gridKey.append(this.but);
  }
}

const keyObj = {
  keyKov: new Key('`'),
  key1: new Key('1'),
  key2: new Key('2'),
  key3: new Key('3'),
  key4: new Key('4'),
  key5: new Key('5'),
  key6: new Key('6'),
  key7: new Key('7'),
  key8: new Key('8'),
  key9: new Key('9'),
  keyNull: new Key('0'),
  keyMinus: new Key('-'),
  keyRes: new Key('='),
  keyBackspace: new Key('Backspace'),
  keyTab: new Key('Tab'),
  keyQ: new Key('q'),
  keyW: new Key('w'),
  keyE: new Key('e'),
  keyR: new Key('r'),
  keyT: new Key('t'),
  keyY: new Key('y'),
  keyU: new Key('u'),
  keyI: new Key('i'),
  keyO: new Key('o'),
  keyP: new Key('p'),
  keyBrL: new Key('['),
  keyBrR: new Key(']'),
  keyESc: new Key('\\'),
  keyDEl: new Key('Delete'),
  keyCaps: new Key('CapsLock'),
  keyA: new Key('a'),
  keyS: new Key('s'),
  keyD: new Key('d'),
  keyF: new Key('f'),
  keyG: new Key('g'),
  keyH: new Key('h'),
  keyJ: new Key('j'),
  keyK: new Key('k'),
  keyL: new Key('l'),
  keyPoint1: new Key(';'),
  keyPoint: new Key("'"),
  keyEnter: new Key('Enter'),
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
  keyArrowUp: new Key('▲'),
  keyRightShift: new Key('Shift'),
  keyLeftCtrl: new Key('Ctrl'),
  keyWin: new Key('Eng'),
  keyLeftAlt: new Key('Alt'),
  keySpace: new Key('space'),
  keyRightAlt: new Key('Alt'),
  keyLeftArrow: new Key('◄'),
  keyDownArrow: new Key('▼'),
  keyRightArrow: new Key('►'),
  keyRightCtrl: new Key('Ctrl'),
};

function initKey(obj) {
  return obj;
}
initKey(keyObj);


// Ru_______________________________________________________________________________
const keyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
// RU + shift_______________________________________________________________________
const keyRuShift = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];
// Eng______________________________________________________________________________
const keyEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
// Eng + shift______________________________________________________________________
const keyEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

document.querySelectorAll('.shift')[1].style.marginLeft = '6px';
document.querySelectorAll('.ctrl')[1].style.marginLeft = '6px';

// function replace Language
function ReplaceLang(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = a[i];
  }
}
// function UpperCase
function LangUpperCase(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = a[i].toUpperCase();
  }
}
// function LowerCase
function LangLowerCase(a) {
  const arr = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = a[i];
  }
}

// function Focus
function setFocus() {
  textAr.focus();
}
setFocus();

// Replace lanuage_______________________________________________________________________________
const keyLang = document.querySelector('.win');

// Mouse Shift Down_______________________________________________________________________________
function MouseShiftDown({target}) {
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    LangUpperCase(keyEngShift);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    LangUpperCase(keyRuShift);
  }
}
gridKey.addEventListener('mousedown', MouseShiftDown);

function MouseShiftUp({target}) {
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    LangLowerCase(keyEng);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    LangLowerCase(keyRu);
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
    LangUpperCase(keyEngShift);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    LeftSHift.classList.add('active');
    LangUpperCase(keyRuShift);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    RightShift.classList.add('active');
    LangUpperCase(keyEngShift);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    RightShift.classList.add('active');
    LangUpperCase(keyRuShift);
  }
}
document.addEventListener('keydown', KeyboardShiftDown);

function KeyboardShiftUp(event) {
  const { code } = event;
  if (code === 'ShiftLeft' && !gridKey.classList.contains('Rus')) {
    LeftSHift.classList.remove('active');
    LangLowerCase(keyEng);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    LeftSHift.classList.remove('active');
    LangLowerCase(keyRu);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    RightShift.classList.remove('active');
    LangLowerCase(keyEng);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    RightShift.classList.remove('active');
    LangLowerCase(keyRu);
  }
}
document.addEventListener('keyup', KeyboardShiftUp);

// Mouse CpasLock _______________________________________________________________________________
function MouseCapsDown({target}) {
  if (target.textContent === 'CapsLock') {
    target.classList.toggle('pressed');
  }
  if (!target.classList.contains('pressed')) {
    const keyArr = document.querySelectorAll('.key');
    for (let i = 0; i < keyArr.length; i++) {
      keyArr[i].textContent = keyArr[i].textContent.toLowerCase();
    }
  }
}
gridKey.addEventListener('click', MouseCapsDown);

function MouseCapsUp({target}) {
  if (target.textContent === 'CapsLock' && target.classList.contains('pressed')) {
    const keyArr = document.querySelectorAll('.key');
    for (let i = 0; i < keyArr.length; i++) {
      keyArr[i].textContent = keyArr[i].textContent.toUpperCase();
    }
  }
}
gridKey.addEventListener('click', MouseCapsUp);

// Key output function__________________________________________________________________________
function KeyOutput({target}) {
  if (target.classList.contains('key')) {
    setFocus();
    textAr.value += target.textContent;
  }
}
gridKey.addEventListener('click', KeyOutput);

// Animation (Mouse) function___________________________________________________________________
function KeyAnimationDown({target}) {
  if (target.classList.contains('allkey')) {
    target.classList.add('active');
  }
}
gridKey.addEventListener('mousedown', KeyAnimationDown);

gridKey.addEventListener('mouseout', ({target}) => {
  target.classList.remove('active');
});

function KeyAnimationUp({target}) {
  target.classList.remove('active');
}
gridKey.addEventListener('mouseup', KeyAnimationUp);

// Animation (Keyboard) function_________________________________________________________________
function keyboardKeyDown({key}) {
  if (key.length === 1) {
    setFocus();
    textAr.value += key.slice(0, -1);
  }
  const array = document.querySelectorAll('.key');
  array.forEach((item) => (item.textContent === key ? item.classList.add('active') : false));
}
document.addEventListener('keydown', keyboardKeyDown);


function KeyboardKeyUp({key}) {
  const array = document.querySelectorAll('.key');
  array.forEach((item) => (item.textContent === key ? item.classList.remove('active') : false));
}
document.addEventListener('keyup', KeyboardKeyUp);

// Animation functional keys_____________________________________________________________________
function FuncKeysDown({key}) {  
  const arr = document.querySelectorAll('.act');
  arr.forEach((item) => {
    if (item.textContent === key) {
      item.classList.add('active');
    }
  });
}
document.addEventListener('keydown', FuncKeysDown);

function FuncKeysUp({key}) {
  const arr = document.querySelectorAll('.act');
  arr.forEach((item) => {
    if (item.textContent === key) {
      item.classList.remove('active');
    }
  });
}
document.addEventListener('keyup', FuncKeysUp);

// BackSpace (Mouse) function______________________________________________________________________
function MouseBackSpaceDown({target}) {
  if (target.textContent === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('click', MouseBackSpaceDown);

// BackSpace (keyboard) function _________________________________________________________________
function KeyboardBackSpaceDown({code}) {
  if (code === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);  
  }
}
document.addEventListener('keydown', KeyboardBackSpaceDown);

// Space function (mouse) _________________________________________________________________________
function handSpace({target}) {
  if (target.textContent === 'space') {
    textAr.value += ' ';
    setFocus();
  }
}
gridKey.addEventListener('click', handSpace);

// Space function (keyboard)
const space = document.querySelector('.space');
function KeyboardSpaceDown({code}) {
  if (code === 'Space') {
    space.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardSpaceDown);

function KeyboardSpaceUp({code}) {
  if (code === 'Space') {
    space.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardSpaceUp);  

// CapsLock Keyboard ______________________________________________________________________________

function KeyboardCapsDown({code}) {
  if (code === 'CapsLock') {
    document.querySelector('.caps').classList.toggle('pressed');
  }
  if (code === 'CapsLock') {
    const arrKey = document.querySelectorAll('.key');
    for (let i = 0; i < arrKey.length; i += 1) {
      arrKey[i].textContent = arrKey[i].textContent.toUpperCase();
    }
  }
}
document.addEventListener('keydown', KeyboardCapsDown);

function KeyboardCapsUp({code}) {
  const but = document.querySelector('.caps');
  if (code === 'CapsLock' && !but.classList.contains('pressed')) {
    const arrKey = document.querySelectorAll('.key');
    for (let i = 0; i < arrKey.length; i += 1) {
      arrKey[i].textContent = arrKey[i].textContent.toLowerCase();
    }
  }
}
document.addEventListener('keydown', KeyboardCapsUp);

// Ctrl________________________________________________________________________________
const [keyLeftCtrl,keyRightCtrl] = document.querySelectorAll('.ctrl');

function KeyboardCtrltDown({code}) {
  if (code === 'ControlLeft') {
    keyLeftCtrl.classList.add('active');
  }
  if (code === 'ControlRight') {
    keyRightCtrl.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardCtrltDown);

function KeyboardCtrltUp({code}) {
  if (code === 'ControlLeft') {
    keyLeftCtrl.classList.remove('active');
  }
  if (code === 'ControlRight') {
    keyRightCtrl.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardCtrltUp);

function CtrltLeftMouseDown({target}) {
  target.classList.add('active');
}
keyLeftCtrl.addEventListener('mousedown', CtrltLeftMouseDown);

function CtrltRightMouseDown({target}) {
  target.classList.add('active');
}
keyRightCtrl.addEventListener('mousedown', CtrltRightMouseDown);

// Alt keyboard__________________________________________________________________________________
const [keyLeftAlt,keyRightAlt] = document.querySelectorAll('.alt');

function KeyboardAltDown({code}) {
  if (event.altKey) {
    event.preventDefault();
  }
  if (code === 'AltLeft') {
    keyLeftAlt.classList.add('active');
  }
  if (code === 'AltRight') {
    keyRightAlt.classList.add('active');
  }
}
document.addEventListener('keydown', KeyboardAltDown);

function KeyboardAltUp({code}) {
  if (code === 'AltLeft') {
    keyLeftAlt.classList.remove('active');
  }
  if (code === 'AltRight') {
    keyRightAlt.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardAltUp);


// Delete keyboard___________________________________________________________________
function DeleteKeyboardDown({code}) {
  if (code === 'Delete') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('keydown', DeleteKeyboardDown);

// Key arrow__________________________________________________________________________
const [arrowUp, arrowL, arrowDown, arrowR] = document.querySelectorAll('.arrow');

function KeyboardArrowDown({code}) {
  if (code === 'ArrowLeft') {
    arrowL.classList.add('active');
    textAr.value += '◄';
  }
  if (code === 'ArrowUp') {
    arrowUp.classList.add('active');
    textAr.value += '▲';
  }
  if (code === 'ArrowRight') {
    arrowR.classList.add('active');
    textAr.value += '►';
  }
  if (code === 'ArrowDown') {
    arrowDown.classList.add('active');
    textAr.value += '▼';
  }
}
document.addEventListener('keydown', KeyboardArrowDown);


function KeyboardArrowUp({code}) {
  if (code === 'ArrowLeft') {
    arrowL.classList.remove('active');
  }
  if (code === 'ArrowUp') {
    arrowUp.classList.remove('active');
  }
  if (code === 'ArrowRight') {
    arrowR.classList.remove('active');
  }
  if (code === 'ArrowDown') {
    arrowDown.classList.remove('active');
  }
}
document.addEventListener('keyup', KeyboardArrowUp);

// Key mouse__________________________________________________________________________
function MouseArrow({target}) {
  if (target.textContent === '◄') {
    textAr.value += '◄';
  }
  if (target.textContent === '▲') {
    textAr.value += '▲';
  }
  if (target.textContent === '►') {
    textAr.value += '►';
  }
  if (target.textContent === '▼') {
    textAr.value += '▼';
  }
}
gridKey.addEventListener('click', MouseArrow);

// Replace language (keyboard)_________________________________________________________
function handler(event) {
  if (event.code === 'ShiftLeft' && event.ctrlKey) {
    gridKey.classList.toggle('Rus');
    keyLang.textContent = 'Ru';
    ReplaceLang(keyRu);
  }
}
document.addEventListener('keydown', handler);

function handlerReplaceLang({code}) {
  if (code === 'ShiftLeft' && event.ctrlKey && gridKey.classList.contains('Rus')) {
    keyLang.textContent = 'Eng';
  }
}
document.addEventListener('keydown', handlerReplaceLang);

function MouseReplaceLang({target}) {
  if (target.textContent === 'Eng') {
    ReplaceLang(KeyEng);
    keyLang.textContent = 'Ru';
  } else {
    ReplaceLang(KeyRu);
    keyLang.textContent = 'Eng';
  }
}
keyLang.addEventListener('click', MouseReplaceLang);

// function Enter (mouse)
function MouseEnter({target}) {
  if (target.textContent === 'Enter') {
    textAr.value += '\r\n';
    setFocus();
  }
}
gridKey.addEventListener('click', MouseEnter);

// function Tab(mouse)
function MouseTab({target}) {
  if (target.textContent === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
gridKey.addEventListener('click', MouseTab);

// function Tab(keyboard)
function KeyboardTab({code}) {
  if (code === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
document.addEventListener('keydown', KeyboardTab);
