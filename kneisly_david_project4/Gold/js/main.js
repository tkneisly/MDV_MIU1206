// Week 4, Project 4
// David Tyler Kneisly
// MUI 1206
// Book Tracker
// Gold Main.JS

// Wait until the DOM is ready


var parseBookForm = function(itm){
	console.log(localStorage);
};

/*
$('#home').bind('pageinit', function() {
	
	$('#home').css( {
		'background-image':'url("images/ribbon.png")'
	})
});
*/

$('#addItem').bind('pageinit', function(){

	var
	bookForm = $('#addbookform'),
	errorslink = $('#errorslink')
	;
	
	bookForm.validate({
		// Fires if invalid values are detected in required fields
		invalidHandler: function(form, validator){
			errorslink.click();
			var output = '';
			for(var key in validator.submitted) {
				var label = $('label[for^="' + key + '"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				output += '<li class="errorli">' + "You're missing the " + fieldName.toLowerCase() + "." + '</li>';
			};
			$("#geterrors ul").html(output);
			console.log(validator.submitted);
		},

		// Fires when form is submitted and there are no validation errors
		submitHandler: function() {
			var data = bookForm.serializeArray();
			parseBookForm(data);
			//storeData();
		}
	})
});