const arr = ['3322', '2770', '8935', '4332', '9000', '2566', '4770'];

arr.forEach((item) => {
  if (item[0] == 2 || item[0] == 4) {
    console.log(item);
  }
});

//=============================================

for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= 100; j++) {
    if (i % j == 0) {
      count += 1;
    }
  }
  if (count <= 2) {
    console.log(`${i} - делители этого числа: 1 и ${i}`);
  }
}
