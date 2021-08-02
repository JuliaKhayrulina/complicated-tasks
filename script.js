let lang = prompt('введите "en" или "ru"', '');

//====через многомерный массив=======//

const daysWeek = [];
daysWeek.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
daysWeek.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(daysWeek[lang]);

//======через if======//

if (lang == 'ru') {
  console.log(daysWeek.ru.join(','));
} else {
  console.log(daysWeek.en.join(','));
}

//=====через switch-case========//

switch (lang) {
  case 'ru':
    console.log(daysWeek.ru.join(','));
    break;
  case 'en':
    console.log(daysWeek.en.join(','));
    break;
}

//=============================================
let namePerson = prompt('Введите имя', '');

console.log(
  namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент'
);
