const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = new Date();

//===============================================

let ul = document.createElement('ul');
document.body.appendChild(ul);

for (let i = 0; i < week.length; i++) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML = week[i];

  if (i === +today.getDay() - 1) {
    li.innerHTML = `<b>${week[i]}</b>`;
  } else if (i == 5 || i == 6) {
    li.innerHTML = `<i>${week[i]}</i>`;
  }
}
