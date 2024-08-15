let month = +prompt("Введите номер месяца")
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("В этот месяц 31 дней");
        break;
    case 2:
        console.log("В этот месяц 29 дней");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("В этот месяц 30 дней");
        break;
    default:
        console.log("Пожалуйста введите число 1-12 ");

        break;
} 