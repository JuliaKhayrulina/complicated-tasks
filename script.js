'use strict';

function getDate() {
  const today = new Date();
  let result = '';

  function getToday() {
    let hours = today.getHours();

    if (hours > 16) {
      result = `<p>Добрый вечер</p>`;
    } else if (hours > 11) {
      result = `<p>Добрый день</p>`;
    } else if (hours > 5) {
      result = `<p>Доброе утро</p>`;
    } else if (hours >= 0) {
      result = `<p>Доброй ночи</p>`;
    }
    getdayWeek();
  }

  function getNewDate() {
    const nextDate = new Date('January  1, 2022'),
      nextNewYear = Math.ceil((nextDate.getTime() - today.getTime()) / 1000 / 3600 / 24),
      days = ['день', 'дня', 'дней'];

    result += `<p>До нового года осталось ${nextNewYear} ${declOfWorlds(nextNewYear, days)}</p>`;
  }

  function getdayWeek() {
    const dayWeek = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
      day = dayWeek[today.getDay()];

    result += `<p>Сегодня: ${day}</p>`;
    getTimeNow();
  }

  function getTimeNow() {
    const hours = ('0' + today.getHours()).slice(-2),
      minutes = ('0' + today.getMinutes()).slice(-2),
      seconds = ('0' + today.getSeconds()).slice(-2),
      amPm = today.toLocaleTimeString('en').slice(-2);

    result += `<p>Текущее время: ${hours}:${minutes}:${seconds} ${amPm}</p>`;
    getNewDate();
  }

  getToday();
  return result;
}

document.querySelector('.result').innerHTML = getDate();

//====окончание слов==========//

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
