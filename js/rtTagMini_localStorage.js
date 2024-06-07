// Сохранение данных из 5 input в Local Storage при вводе
document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function() {
        localStorage.setItem(input.id, this.value);
    });
});

// Восстановление данных из Local Storage при открытии плагина
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input').forEach(function(input) {
        var savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
        }
    });
});