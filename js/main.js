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
function replaceLang(a) {
  const arrKey = document.querySelectorAll('.key');
  for (let i = 0; i < arrKey.length; i++) {
    arrKey[i].textContent = a[i];
  }
}
// function UpperCase
function langUpperCase(a) {
  const arrKey = document.querySelectorAll('.key');
  for (let i = 0; i < arrKey.length; i++) {
    arrKey[i].textContent = a[i].toUpperCase();
  }
}
// function LowerCase
function langLowerCase(a) {
  const arrKey = document.querySelectorAll('.key');
  for (let i = 0; i < arrKey.length; i++) {
    arrKey[i].textContent = a[i];
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
function mouseShiftDown({target}) {
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    langUpperCase(keyEngShift);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    langUpperCase(keyRuShift);
  }
}
gridKey.addEventListener('mousedown', mouseShiftDown);

function mouseShiftUp({target}) {
  if (target.textContent === 'Shift' && !gridKey.classList.contains('Rus')) {
    langLowerCase(keyEng);
  }

  if (target.textContent === 'Shift' && gridKey.classList.contains('Rus')) {
    langLowerCase(keyRu);
  }
}
gridKey.addEventListener('mouseup', mouseShiftUp);

// Keyboard Shift_______________________________________________________________________________
const leftSHift = document.querySelectorAll('.shift')[0];
const rightShift = document.querySelectorAll('.shift')[1];

function keyboardShiftDown(event) {
  const { code } = event;
  if (code === 'ShiftLeft' && !gridKey.classList.contains('Rus')) {
    leftSHift.classList.add('active');
    langUpperCase(keyEngShift);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    leftSHift.classList.add('active');
    langUpperCase(keyRuShift);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    rightShift.classList.add('active');
    langUpperCase(keyEngShift);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    lightShift.classList.add('active');
    LangUpperCase(keyRuShift);
  }
}
document.addEventListener('keydown', keyboardShiftDown);

function keyboardShiftUp(event) {
  const { code } = event;
  if (code === 'ShiftLeft' && !gridKey.classList.contains('Rus')) {
    leftSHift.classList.remove('active');
    langLowerCase(keyEng);
  }
  if (code === 'ShiftLeft' && gridKey.classList.contains('Rus')) {
    leftSHift.classList.remove('active');
    langLowerCase(keyRu);
  }
  if (code === 'ShiftRight' && !gridKey.classList.contains('Rus')) {
    rightShift.classList.remove('active');
    langLowerCase(keyEng);
  }
  if (code === 'ShiftRight' && gridKey.classList.contains('Rus')) {
    rightShift.classList.remove('active');
    langLowerCase(keyRu);
  }
}
document.addEventListener('keyup', keyboardShiftUp);

// Mouse CpasLock _______________________________________________________________________________
function mouseCapsDown({target}) {
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
gridKey.addEventListener('click', mouseCapsDown);

function mouseCapsUp({target}) {
  if (target.textContent === 'CapsLock' && target.classList.contains('pressed')) {
    const keyArr = document.querySelectorAll('.key');
    for (let i = 0; i < keyArr.length; i++) {
      keyArr[i].textContent = keyArr[i].textContent.toUpperCase();
    }
  }
}
gridKey.addEventListener('click', mouseCapsUp);

// Key output function__________________________________________________________________________
function keyOutput({target}) {
  if (target.classList.contains('key')) {
    setFocus();
    textAr.value += target.textContent;
  }
}
gridKey.addEventListener('click', keyOutput);

// Animation (Mouse) function___________________________________________________________________
function keyAnimationDown({target}) {
  if (target.classList.contains('allkey')) {
    target.classList.add('active');
  }
}
gridKey.addEventListener('mousedown', keyAnimationDown);

gridKey.addEventListener('mouseout', ({target}) => {
  target.classList.remove('active');
});

function keyAnimationUp({target}) {
  target.classList.remove('active');
}
gridKey.addEventListener('mouseup', keyAnimationUp);

// Animation (Keyboard) function_________________________________________________________________
function keyboardKeyDown({key}) {
  if (key.length === 1) {
    setFocus();
    textAr.value += key.slice(0, -1);
  }
  const arrKey = document.querySelectorAll('.key');
  arrKey.forEach((item) => (item.textContent === key ? item.classList.add('active') : false));
}
document.addEventListener('keydown', keyboardKeyDown);


function keyboardKeyUp({key}) {
  const arrKey = document.querySelectorAll('.key');
  arrKey.forEach((item) => (item.textContent === key ? item.classList.remove('active') : false));
}
document.addEventListener('keyup', keyboardKeyUp);

// Animation functional keys_____________________________________________________________________
function funcKeysDown({key}) {  
  const arrKey = document.querySelectorAll('.act');
  arrKey.forEach((item) => {
    if (item.textContent === key) {
      item.classList.add('active');
    }
  });
}
document.addEventListener('keydown', funcKeysDown);

function funcKeysUp({key}) {
  const arrKey = document.querySelectorAll('.act');
  arrKey.forEach((item) => {
    if (item.textContent === key) {
      item.classList.remove('active');
    }
  });
}
document.addEventListener('keyup', funcKeysUp);

// BackSpace (Mouse) function______________________________________________________________________
function mouseBackSpaceDown({target}) {
  if (target.textContent === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('click', mouseBackSpaceDown);

// BackSpace (keyboard) function _________________________________________________________________
function keyboardBackSpaceDown({code}) {
  if (code === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);  
  }
}
document.addEventListener('keydown', keyboardBackSpaceDown);

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
function keyboardSpaceDown({code}) {
  if (code === 'Space') {
    space.classList.add('active');
  }
}
document.addEventListener('keydown', keyboardSpaceDown);

function keyboardSpaceUp({code}) {
  if (code === 'Space') {
    space.classList.remove('active');
  }
}
document.addEventListener('keyup', keyboardSpaceUp);  

// CapsLock Keyboard ______________________________________________________________________________

function keyboardCapsDown({code}) {
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
document.addEventListener('keydown', keyboardCapsDown);

function keyboardCapsUp({code}) {
  const but = document.querySelector('.caps');
  if (code === 'CapsLock' && !but.classList.contains('pressed')) {
    const arrKey = document.querySelectorAll('.key');
    for (let i = 0; i < arrKey.length; i += 1) {
      arrKey[i].textContent = arrKey[i].textContent.toLowerCase();
    }
  }
}
document.addEventListener('keydown', keyboardCapsUp);

// Ctrl________________________________________________________________________________
const [keyLeftCtrl,keyRightCtrl] = document.querySelectorAll('.ctrl');

function keyboardCtrltDown({code}) {
  if (code === 'ControlLeft') {
    keyLeftCtrl.classList.add('active');
  }
  if (code === 'ControlRight') {
    keyRightCtrl.classList.add('active');
  }
}
document.addEventListener('keydown', keyboardCtrltDown);

function keyboardCtrltUp({code}) {
  if (code === 'ControlLeft') {
    keyLeftCtrl.classList.remove('active');
  }
  if (code === 'ControlRight') {
    keyRightCtrl.classList.remove('active');
  }
}
document.addEventListener('keyup', keyboardCtrltUp);

function ctrltLeftMouseDown({target}) {
  target.classList.add('active');
}
keyLeftCtrl.addEventListener('mousedown', ctrltLeftMouseDown);

function ctrltRightMouseDown({target}) {
  target.classList.add('active');
}
keyRightCtrl.addEventListener('mousedown', ctrltRightMouseDown);

// Alt keyboard__________________________________________________________________________________
const [keyLeftAlt,keyRightAlt] = document.querySelectorAll('.alt');

function keyboardAltDown({code}) {
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
document.addEventListener('keydown', keyboardAltDown);

function keyboardAltUp({code}) {
  if (code === 'AltLeft') {
    keyLeftAlt.classList.remove('active');
  }
  if (code === 'AltRight') {
    keyRightAlt.classList.remove('active');
  }
}
document.addEventListener('keyup', keyboardAltUp);


// Delete keyboard___________________________________________________________________
function deleteKeyboardDown({code}) {
  if (code === 'Delete') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('keydown', deleteKeyboardDown);

// Key arrow__________________________________________________________________________
const [arrowUp, arrowL, arrowDown, arrowR] = document.querySelectorAll('.arrow');

function keyboardArrowDown({code}) {
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
document.addEventListener('keydown', keyboardArrowDown);


function keyboardArrowUp({code}) {
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
document.addEventListener('keyup', keyboardArrowUp);

// Key mouse__________________________________________________________________________
function mouseArrow({target}) {
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
gridKey.addEventListener('click', mouseArrow);

// Replace language (keyboard)_________________________________________________________
function handler(event) {
  if (event.code === 'ShiftLeft' && event.ctrlKey) {
    gridKey.classList.toggle('Rus');
    keyLang.textContent = 'Ru';
    replaceLang(keyRu);
  }
}
document.addEventListener('keydown', handler);

function handlerReplaceLang({code}) {
  if (code === 'ShiftLeft' && event.ctrlKey && gridKey.classList.contains('Rus')) {
    keyLang.textContent = 'Eng';
  }
}
document.addEventListener('keydown', handlerReplaceLang);

function mouseReplaceLang({target}) {
  if (target.textContent === 'Eng') {
    replaceLang(keyEng);
    keyLang.textContent = 'Ru';
  } else {
    replaceLang(keyRu);
    keyLang.textContent = 'Eng';
  }
}
keyLang.addEventListener('click', mouseReplaceLang);

// function Enter (mouse)
function mouseEnter({target}) {
  if (target.textContent === 'Enter') {
    textAr.value += '\r\n';
    setFocus();
  }
}
gridKey.addEventListener('click', mouseEnter);

// function Tab(mouse)
function mouseTab({target}) {
  if (target.textContent === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
gridKey.addEventListener('click', mouseTab);

// function Tab(keyboard)
function keyboardTab({code}) {
  if (code === 'Tab') {
    textAr.value += '   ';
    setFocus();
  }
}
document.addEventListener('keydown', keyboardTab);
