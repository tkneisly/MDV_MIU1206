// Week 3, Project 3
// David Tyler Kneisly
// MUI 1206
// Book Tracker
// Gold Main.JS

// Wait until the DOM is ready


var parseBookForm = function(itm){
	console.log(localStorage);
	/*
	if(!key) {
		var id = Math.floor(Math.random()*100000001);
	} else {
		// Set the id to the existing key if the item is being edited
		// From here, key is passed to the validate function, then into storeData
		id = key;
	}
	for (var i=0; i < data.length; i++) {
			if (radios[i].checked) {
				genreValue = radios[i].value;
			}
		}
	var item = {};
	item.groups = ['Group:', ge('groups').value];
	item.titles = ['Title:', ge('booktitle').value];
	item.authors = ['Author:', ge('author').value];
	item.readpages = ['Pages:', ge('pages').value];
	item.datefinished = ['Date Finished:', ge('date').value];
	item.rating = ['Rating:', ge('rating').value];
	item.category = ['Genre:', genreValue];
	item.favs = ['Favorite:', favoriteValue];
	item.note = ['Notes:', ge('notes').value];
	localStorage.setItem(id, JSON.stringify(item));
	// Data is saved into Local Storage; Using 'Stringify' to convert the object into a string
	alert('Book is saved!');
	window.location.reload();
	scrollTo(0,1);
	return false;
	*/
};



$(document).bind('pageinit', function(){

	var
	bookForm = $('#addbookform'),
	errorslink = $('#errorslink'),
	item = {}
	;
	
	$.fn.serializeObject = function(){
	    var itm = item;
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (itm[this.name] !== undefined) {
	            if (!itm[this.name].push) {
	                itm[this.name] = [itm[this.name]];
	            }
	            itm[this.name].push(this.value || '');
	        } else {
	            itm[this.name] = this.value || '';
	        }
	    });
	    return itm;
	};
	
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
		//focusInvalid:false,
		// Fires when form is submitted and there are no validation errors
		submitHandler: function(itm) {
			var id = Math.floor(Math.random()*100000001);
			var outForm = $('#result').text(JSON.stringify($('bookForm').serializeObject()));
			localStorage.setItem(id, itm);
			return false;
		}
	})
});