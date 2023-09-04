var tasks = [
    // Завдання 1
    function() {
      var userName = prompt("Завдання 1: Введіть ваше ім'я:");
      alert("Привіт, " + userName + "!");
    },
    // Завдання 2
    function() {
      const currentYear = new Date().getFullYear();
      var birthYear = parseInt(prompt("Завдання 2: Введіть рік народження:"));
      var age = currentYear - birthYear;
      alert("Вам " + age + " років.");
    },
    // Завдання 3
    function() {
      var sideLength = parseFloat(prompt("Завдання 3: Введіть довжину сторони квадрата (у см):"));
      var perimeter = 4 * sideLength;
      alert("Периметр квадрата: " + perimeter + " см");
    },
    // Завдання 4
    function() {
      var radius = parseFloat(prompt("Завдання 4: Введіть радіус кола (у см):"));
      var area = Math.PI * radius * radius;
      alert("Площа кола: " + area + " см²");
    },
    // Завдання 5
    function() {
      var distance = parseFloat(prompt("Завдання 5: Введіть відстань між містами (у км):"));
      var hours = parseFloat(prompt("Скільки годин ви хочете дістатися?"));
      var speed = distance / hours;
      alert("Вам потрібно рухатися зі швидкістю " + speed + " км/год");
    },
    // Завдання 6
    function() {
      const exchangeRate = 0.85; // Курс долара до євро
      var dollars = parseFloat(prompt("Завдання 6: Введіть суму в доларах:"));
      var euros = dollars * exchangeRate;
      alert("Сума в євро: " + euros + " €");
    },
    // Завдання 7
    function() {
      var flashDriveSize = parseFloat(prompt("Завдання 7: Введіть обсяг флешки у ГБ:"));
      var filesizeMB = 820; // Розмір файлу у МБ
      var filesCount = Math.floor(flashDriveSize * 1024 / filesizeMB);
      alert("На флешці з обсягом " + flashDriveSize + " ГБ поміститься " + filesCount + " файлів розміром 820 МБ");
    },
    // Завдання 8
    function() {
      var walletMoney = parseFloat(prompt("Завдання 8: Введіть суму грошей у гаманці:"));
      var chocolatePrice = parseFloat(prompt("Введіть вартість однієї шоколадки:"));
      var chocolateCount = Math.floor(walletMoney / chocolatePrice);
      var change = walletMoney - (chocolateCount * chocolatePrice);
      alert("Ви можете купити " + chocolateCount + " шоколадок, і у вас залишиться " + change + " грн");
    },
    // Завдання 9
    function() {
      var threeDigitNumber = parseInt(prompt("Завдання 9: Введіть тризначне число:"));
      var reversedNumber = (threeDigitNumber % 10) * 100 + Math.floor((threeDigitNumber % 100) / 10) * 10 + Math.floor(threeDigitNumber / 100);
      alert("Паліндром числа: " + reversedNumber);
    },
    // Завдання 10
    function() {
      var userNumber = parseInt(prompt("Завдання 10: Введіть ціле число:"));
      var result = userNumber % 2 === 0 ? "парне" : "непарне";
      alert("Це число є " + result);
    },
  ];
  
  for (var i = 0; i < tasks.length; i++) {
    tasks[i]();
  }
  