$('button[id="subscribe-btn"]').click(function () {
    window.open("https://www.instagram.com/secret_place_nk");
});



$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// $(document).ready(function() {
// 	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		// if (document.form.name == '' || document.form.phone.value == '') {
// 		// 	valid = false;
// 		// 	return valid;
// 		// }
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
//             console.log('Success');
// 			// $('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });