document.getElementById("fc_copy_button").addEventListener("click", function() {
    var fc_phone = document.getElementById("fc_phone").value;
    var fc_resolution = document.getElementById("fc_resolution").value;
    var fc_solution = document.getElementById("fc_solution").value;
    var fc_related_services = document.getElementById("fc_related_services").value;
    var fc_more_info = document.getElementById("fc_morei_nfo").value;
    
    var comment = "КТ: " + fc_phone + "\n" + "Сложность абонента: " + fc_resolution + "\n" + "Решение: " + fc_solution + "\n" + "Другие услуги: " + fc_related_services + "\n" + "Дополнительно: " + fc_more_info;
  
    navigator.clipboard.writeText(comment)
      .then(() => {
        // Добавить сообщение об успешном копировании
        console.log("Комментарий скопирован в буфер обмена: \n" + comment);
      })
      .catch(err => {
        console.error('Ошибка копирования: ', err);
      });
  });

  function clearInputs() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
  }
  
  document.getElementById('fc_copy_clear').addEventListener('click', clearInputs);