'use strict';

const register = document.querySelector('.register'), //зарегистрироваться
  login = document.querySelector('.login'), //авторизоваться
  dataUsersBlock = document.querySelector('.dataUsers'); //блок куда выводятся данные

outputDataOnPage();

let arrDataUsers = [],
  arrLocalData = JSON.parse(localStorage.getItem('dataUser'));

if (arrLocalData) {
  arrDataUsers = JSON.parse(localStorage.getItem('dataUser'));
}

class User {
  constructor(firstName, lastName, login, password, regDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.regDate = regDate;
  }
}

function initRegister() {
  let data = getDataUser();
  const dataUser = new User(data[0], data[1], data[2], data[3], createRegDate());

  arrDataUsers.push(dataUser);
  localStorage.setItem('dataUser', JSON.stringify(arrDataUsers));

  outputDataOnPage();
}

function initLogin() {
  const date = JSON.parse(localStorage.getItem('dataUser'));

  let count = 0;
  let login = prompt('Введите логин');

  if (!login) {
    return;
  } else {
    let pass = prompt('Введите пароль');
    date.forEach((item, index) => {
      if (item.login === login && item.password === pass) {
        localStorage.clear();
        localStorage.setItem('dataUser', JSON.stringify(date));
        localStorage.setItem(index, item.firstName);
        count++;
        outputDataOnPage();
      }
    });
    if (!count) {
      alert('Пользователь не найден!');
    }
  }
}

function outputDataOnPage() {
  dataUsersBlock.innerHTML = '';
  document.querySelector('.hello-title').textContent = `Привет, аноним!`;
  const date = JSON.parse(localStorage.getItem('dataUser'));

  if (date) {
    date.forEach((item, index) => {
      let str = `Имя: ${item.firstName}, Фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}`;
      const p = document.createElement('p');
      const button = document.createElement('button');
      button.classList.add(`delete`);
      button.id = `${index}`;
      p.innerHTML = str;
      p.append(button);
      dataUsersBlock.append(p);

      let title = localStorage.getItem(index);
      if (title) {
        document.querySelector('.hello-title').textContent = `Привет, ${title}!`;
      }
    });
  }
}

function createRegDate() {
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

  const regDate = new Date();
  const hours = ('0' + regDate.getHours()).slice(-2);
  const minutes = ('0' + regDate.getMinutes()).slice(-2);
  const seconds = ('0' + regDate.getSeconds()).slice(-2);
  const nowDate = `${regDate.getDate()} ${
    months[regDate.getMonth()]
  } ${regDate.getFullYear()} г., ${hours}:${minutes}:${seconds}`;

  return nowDate;
}

function getDataUser() {
  let userName = prompt('Введите имя и фамилию', 'Иван Иванов');
  userName = userName.split(' ');

  while (userName.length !== 2) {
    userName = prompt('Вы ввели некорректное имя и фамилию, повторите еще раз', 'Иван Иванов');
    userName = userName.split(' ');
  }

  let login = prompt('Придумайте логин');
  while (login == '') {
    login = prompt('Придумайте логин');
  }

  let password = prompt('Придумайте пароль не менее 5 символов');
  while (password.length < 5) {
    password = prompt('Придумайте пароль не менее 5 символов');
  }

  return [userName[0], userName[1], login, password];
}

function delUserData(target) {
  arrDataUsers.splice(target.id, 1);
  localStorage.setItem('dataUser', JSON.stringify(arrDataUsers));
  localStorage.removeItem(target.id);
  outputDataOnPage();
}

register.addEventListener('click', initRegister);
login.addEventListener('click', initLogin);

document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('delete')) {
    delUserData(e.target);
  }
});
