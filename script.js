'use strict';

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];
const arrMinutes = ['минута', 'минуты', 'минут'];
const arrHours = ['час', 'часа', 'часов'];
const arrSeconds = ['секунда', 'секунды', 'секунд'];

//=========Окончание слов=======================

function declOfWorlds(n, text) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return text[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text[1];
  }
  if (n1 == 1) {
    return text[0];
  }
  return text[2];
}

function upDate() {
  const myDate = new Date();
  const dayWeek = `Сегодня ${days[myDate.getDay()]},`;
  const nowDate = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} года,`;
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  const time = `${hours} ${declOfWorlds(hours, arrHours)} ${minutes} ${declOfWorlds(
    minutes,
    arrMinutes
  )}
 ${seconds} ${declOfWorlds(seconds, arrSeconds)}`;
  document.querySelector('.date-one').textContent = `${dayWeek} ${nowDate} ${time}`;
}

//======================================================================================

function upTime() {
  const myDate = new Date();
  const day = ('0' + myDate.getDate()).slice(-2);
  const month = ('0' + (myDate.getMonth(12) + 1)).slice(-2);
  const hours = ('0' + myDate.getHours()).slice(-2);
  const minutes = ('0' + myDate.getMinutes()).slice(-2);
  const seconds = ('0' + myDate.getSeconds()).slice(-2);

  document.querySelector(
    '.date-two'
  ).textContent = `${day}.${month}.${myDate.getFullYear()} - ${hours}:${minutes}:${seconds}`;
}

setInterval(() => upDate(), 1000);
setInterval(() => upTime(), 1000);
