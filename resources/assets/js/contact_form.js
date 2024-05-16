function validateForm() {
    // Устанавливаем флаги валидации на начальное значение (false)
    var isFullNameValid = false;
    var isEmailValid = false;
    var isPhoneValid = false;
    var isSubjectValid = false;
    var isMessageValid = false;


    function setValidity(element, isValid, errorMessage) {
        var errorId = element.id + "Error";
        var errorElement = document.getElementById(errorId);

        if (isValid) {
            element.classList.remove("invalid");
            element.classList.add("valid");
            errorElement.innerHTML = "";
        } else {
            element.classList.remove("valid");
            element.classList.add("invalid");
            errorElement.innerHTML = errorMessage || "Поле обязательно для заполнения";
        }

        return isValid;
    }

    function isEmpty(value) {
        return value.trim() === "";
    }

    // Проводим валидацию для каждого поля
    isFullNameValid = setValidity(document.getElementById("fullName"), !isEmpty(document.getElementById("fullName").value) && /^[A-Za-zА-Яа-яЁё\s]+$/u.test(document.getElementById("fullName").value), "Введите корректно ФИО");
    isEmailValid = setValidity(document.getElementById("email"), !isEmpty(document.getElementById("email").value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value), "Введите действительную почту");
    isPhoneValid = setValidity(document.getElementById("phone"), !isEmpty(document.getElementById("phone").value) && /^\+\d{12}$/.test(document.getElementById("phone").value), "Введите корректный номер телефона");
    isSubjectValid = setValidity(document.getElementById("subject"), !isEmpty(document.getElementById("subject").value) && /^ИП\sКОРЕНЬКО$/i.test(document.getElementById("subject").value), "Please enter a valid subject (ИП КОРЕНЬКО)");
    isMessageValid = setValidity(document.getElementById("message"), !isEmpty(document.getElementById("message").value) && /^[\s\S]{1,600}$/.test(document.getElementById("message").value), "Введите корректно сообщение (лимит 600 символов)");


    /* isCourseValid = setValidity(document.getElementById("course"), !isEmpty(document.getElementById("course").value), "Please select a course");
     isEnglishLevelValid = setValidity(document.getElementById("englishLevel"), !isEmpty(document.getElementById("englishLevel").value), "Please select an English level");
*/
    // Отправка формы, если все поля прошли валидацию
    if (isFullNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbz745qupjvEjfavTV3_ferjali_32qmgRqfWMa2mq1u-N5YZ8qkrVffj-7wBKgHDuYr/exec',
            method: 'POST',
            dataType: 'json',
            data: $('#sendRequestForm').serialize(),
            success: function (response) {
                // Выводим сообщение об успешной отправке формы на странице
                $('#resultMessage').text('Отправка выполнена!\n С вами свяжутся в течении 24ч.');
            },
            error: function (xhr, status, error) {
                // Выводим сообщение об ошибке отправки формы на странице
                $('#resultMessage').text('Произошла ошибка, повторите попытку позже.');
            }
        });
    }
}