//if
var age = 18;

if (age > 10) {
    document.write("Вам больше 10 лет<br>");
}

//if ... else
var age = 18;

if (age < 10) {
    document.write("Вам больше 10 лет<br>");
}
else {
    document.write("Вам меньше 10<br>");
}

//switch
var day = "Воскресенье";
switch(day){
    case "Пятница":
        document.write("Сегодня пятница<br>");
        break;
    case "Суббота":
        document.write("Сегодня суббота<br>");
        break;
    case "Воскресенье":
        document.write("Сегодня воскресенье<br>");
        break;
    }

//for
for (var i = 1; i <= 3; i++) {
    document.write(`Число ${i}<br>`);
}

//while
var count = 0;
while (count <=3) {
    document.write(`Считаем: ${count}<br>`)
    count++;
}

//do ... while
do {
    document.write(i + "<br>");
    i++;
}
while (i < 3)


//break
for (var i = 0; i < 15; i++) {
    if (i === 10) {
        break;
    }
}
document.write(i + "<br>");

//continue
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    document.write(i + "<br>");
}

//return
function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 4);
document.write(`return = ${result}`);
