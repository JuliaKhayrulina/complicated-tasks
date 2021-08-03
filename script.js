const str = prompt('Введите текст', '');
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
