"use strict";

var btnTime = document.querySelector('.main');
var btnReset = document.querySelector('.reset');
var panel = document.querySelector('.time div');
var time = 0;
var active = false;
var idI;

var timer = function timer() {
  if (!active) {
    active = !active;
    btnTime.textContent = 'Pause';
    idI = setInterval(start, 10);
  } else {
    active = !active;
    btnTime.textContent = 'Start';
    clearInterval(idI);
  }
};

var start = function start() {
  time++;
  panel.textContent = (time / 100).toFixed(2);
};

var reset = function reset() {
  time = 0;
  panel.textContent = '---';
  active = !active;
  btnTime.textContent = 'Start';
  clearInterval(idI);
};

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);