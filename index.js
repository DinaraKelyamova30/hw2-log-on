let name = prompt('Введи ім`я');
if (name == 'Імя') {
    let password = prompt('Введи пароль');
    if (password == 'ЛОГОС') {
        alert('Ласкаво просимо!');
    } else if (password == '') {
        alert('Ви нічого не ввели');
    } else if (password == null) {
        alert('Вхід скасований');
    } else {
        alert('Пароль невірний');
    }
} else if (name == null) {
    alert('Вхід скасований');
} else if (name == '') {
    alert('Ви нічого не ввели');
} else {
    alert('Я вас не знаю');
}