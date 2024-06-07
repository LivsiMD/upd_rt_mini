document.addEventListener('DOMContentLoaded', function() {
    fetch('https://livsi-games.ru/tagDescription')
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('tagSelect');
        const description = document.getElementById('descriptionSpan');
        const ago_date = document.getElementById('tag_data_time'); // Получение элемента для ввода даты и времени
        const ago_phone = document.getElementById('tag_phone')
        ago_phone.style.display = "none"

        data.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute("id", "tag_option");
            option.text = item.name;
            dropdown.add(option);
        });

        dropdown.addEventListener('change', function() {
            const selectedName = this.value;
            const selectedDescription = data.find(item => item.name === selectedName).description;
            description.textContent = selectedDescription;

            // Получение данных из выбранного элемента <option>
            const selectedTag = data.find(item => item.name === selectedName);

            // Добавление поля ввода в зависимости от выбранного элемента
            if (selectedTag.name === "аго_время") {
                ago_date.style.display = "block"; // Показать элемент для ввода даты и времени
            } else {
                ago_date.style.display = "none"; // Скрыть элемент для ввода даты и времени
            }

            if (selectedTag.name === "аго_номер") {
                ago_phone.style.display = "block"; // Показать элемент для ввода даты и времени
            } else {
                ago_phone.style.display = "none"; // Скрыть элемент для ввода даты и времени
            }
        });
    })
    .catch(error => console.error('Error:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://livsi-games.ru/get_all_news')
    .then(response => response.json())
    .then(data => {
        const h2Element = document.getElementById('news_title');
        const pElement = document.getElementById('news-text_full');

        // Выберите первую новость по умолчанию
        const defaultNews = data[0];

        h2Element.textContent = defaultNews.title;
        pElement.textContent = defaultNews.full_news_text;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById("tag_copy").addEventListener("click", function() {
    const tag_main = document.getElementById("tagSelect").value;
    const main_text = document.getElementById("tag_text").value;
    const tag_phone = document.getElementById("tag_phone").value;
    const tag_data_time = document.getElementById("tag_data_time").value;

    if (tag_main === "аго_время") {
        const date = new Date(tag_data_time);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleString('ru-RU', options).replace(',', '');

        const tag_comment = "#" + tag_main + " " + formattedDate + " " + main_text;

        navigator.clipboard.writeText(tag_comment)
        .then(() => {
          // Добавить сообщение об успешном копировании
          console.log("Комментарий скопирован в буфер обмена: \n" + tag_comment);
        })
        .catch(err => {
          console.error('Ошибка копирования: ', err);
        });

    } else if (tag_main === "аго_номер") {
        const tag_comment_phone = "#" + tag_main + " " + tag_phone + " " + main_text;

        navigator.clipboard.writeText(tag_comment_phone)
        .then(() => {
          // Добавить сообщение об успешном копировании
          console.log("Комментарий скопирован в буфер обмена: \n" + tag_comment_phone);
        })
        .catch(err => {
          console.error('Ошибка копирования: ', err);
        });
    } else if (tag_main === "продажа2ЛТП") {
        const tag_comment_sale = "#" + tag_main + " " + main_text + " Требуется на выезд взять с собой  и при устранении проблемы установить и настроить это оборудование и заполнить документы для продажи 2ЛТП. Тип реализации (продажа).";

        navigator.clipboard.writeText(tag_comment_sale)
        .then(() => {
          // Добавить сообщение об успешном копировании
          console.log("Комментарий скопирован в буфер обмена: \n" + tag_comment_sale);
        })
        .catch(err => {
          console.error('Ошибка копирования: ', err);
        }); 
    } else {
        const tag_comment_none = "#" + tag_main + " " + main_text;

        navigator.clipboard.writeText(tag_comment_none)
        .then(() => {
          // Добавить сообщение об успешном копировании
          console.log("Комментарий скопирован в буфер обмена: \n" + tag_comment_none);
        })
        .catch(err => {
          console.error('Ошибка копирования: ', err);
        });
    }
});

// Находим все текстовые элементы с классом news-text
const newsTextElements = document.querySelectorAll('.news-text');
            
// Проходим по каждому элементу и заменяем текстовые ссылки на активные ссылки
newsTextElements.forEach(element => {
     element.innerHTML = element.innerHTML.replace(/\b(https?:\/\/\S+\.(\S+))\b/g, '<a target="_blank" href="$1">$1</a>');
});
