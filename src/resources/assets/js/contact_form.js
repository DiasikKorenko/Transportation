/*$(document).ready(function(){
	// Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fieldddddddddddddddddds.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			$.ajax({
				method : 'post',
				url : 'contactmail.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again later.</p>');
				}
			});
		}
	});
});*/

/*$(document).ready(function(){
	// Функция для проверки обязательных полей и их валидации
	function checkRequire(formId , targetResp){
		targetResp.html(''); // Очищаем сообщение об ошибке
		var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // Паттерн для проверки email
		var fullNamePattern = /^[a-zA-Zа-яА-Я\s]*$/; // Паттерн для проверки ФИО
		var phonePattern = /^\+?\d{10,14}$/; // Паттерн для проверки телефона
		var messagePattern = /^.{1,300}$/; // Паттерн для проверки сообщения

		var check = 0; // Переменная для отслеживания ошибок
		var target = (typeof formId == 'object') ? $(formId) : $('#' + formId); // Находим форму
		target.find('input, textarea').each(function(){ // Перебираем все input и textarea в форме
			if ($(this).hasClass('require')){ // Проверяем, является ли поле обязательным
				if ($(this).val().trim() == ''){ // Проверяем, заполнено ли обязательное поле
					check = 1; // Устанавливаем флаг ошибки
					$(this).focus(); // Устанавливаем фокус на поле
					targetResp.html('Есть незаполненные поля.'); // Выводим сообщение об ошибке
					$(this).addClass('error'); // Добавляем класс ошибки для стилизации поля
					return false; // Прерываем цикл, чтобы не проверять другие поля
				} else {
					$(this).removeClass('error'); // Удаляем класс ошибки, если поле заполнено
				}
			}
			if ($(this).val().trim() != ''){ // Проверяем, заполнено ли поле
				var valid = $(this).attr('data-valid'); // Получаем атрибут data-valid
				if (typeof valid != 'undefined'){ // Проверяем, существует ли атрибут data-valid
					if (!eval(valid).test($(this).val().trim())){ // Проверяем валидность поля с помощью заданного паттерна
						$(this).addClass('error'); // Добавляем класс ошибки для стилизации поля
						$(this).focus(); // Устанавливаем фокус на поле
						check = 1; // Устанавливаем флаг ошибки
						targetResp.html($(this).attr('data-error')); // Выводим сообщение об ошибке
						return false; // Прерываем цикл, чтобы не проверять другие поля
					} else {
						$(this).removeClass('error'); // Удаляем класс ошибки, если поле валидно
					}
				}
			}
		});
		return check; // Возвращаем значение флага ошибки
	}

	// Обработчик события отправки формы
	$(".submitForm").on("click", function() {
		var _this = $(this); // Сохраняем ссылку на кнопку
		var targetForm = _this.closest('form'); // Находим ближайшую форму
		var errroTarget = targetForm.find('.response'); // Находим элемент для вывода сообщения об ошибке
		var check = checkRequire(targetForm , errroTarget); // Проверяем обязательные поля
		if (check == 0){ // Если ошибок нет
			var formDetail = new FormData(targetForm[0]); // Создаем объект FormData для отправки данных формы
			$.ajax({
				method: 'post', // Метод отправки данных
				url: targetForm.attr('action'), // URL-адрес, указанный в атрибуте action формы
				data: formDetail, // Данные для отправки
				cache: false,
				contentType: false,
				processData: false
			}).done(function(resp){ // Обработчик успешного выполнения запроса
				if (resp == 1){ // Если ответ от сервера успешный
					targetForm.find('input, textarea').val(''); // Очищаем все поля ввода
					errroTarget.html('<p style="color:green;">Ваша заявка отправлена.</p>'); // Выводим сообщение об успешной отправке
				} else { // Если ответ от сервера неуспешный
					errroTarget.html('<p style="color:red;">Что-то пошло не так, пожалуйста, попробуйте позже.</p>'); // Выводим сообщение об ошибке
				}
			});
		}
	});
});*/



