const str =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cumque reprehenderit aut nam repudiandae itaque laborum officia corrupti, sed placeat. Iure nostrum quo cum aut debitis suscipit laboriosam laudantium maiores ipsam quam, animi dignissimos rerum libero natus vitae fuga itaque asperiores? Vitae, maxime. Voluptate, necessitatibus!';

//const str = 10;

let result = getString(str);

function getString(str) {
  if (typeof str != 'string') {
    alert('Это не строка');
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.substr(0, 30);
      str += '...';
    }
  }
  return str;
}
console.log(`длина строки была: ${str.length} \n${str}`);
console.log(`длина строки стала:${result.length} \n${result}`);
