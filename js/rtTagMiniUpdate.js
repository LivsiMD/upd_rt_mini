// Функция для проверки обновлений плагина
function checkForUpdates() {
    // Отправляем запрос на сервер, чтобы проверить наличие новой версии плагина
    fetch('https://livsi-games.ru/download/')
        .then(response => response.json())
        .then(data => {
            const latestVersion = data.version;
            const currentVersion = chrome.runtime.getManifest().version;

            // Проверяем текущую версию с новой версией
            if (latestVersion > currentVersion) {
                // Если есть новая версия, загружаем её
                installUpdate();
            }
        });
}

// Функция для загрузки и установки новой версии плагина
function installUpdate() {
    // Загружаем и устанавливаем новую версию плагина
    chrome.runtime.reload();
}

// Вызываем функцию проверки обновлений при загрузке плагина
checkForUpdates();