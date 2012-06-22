// Week 4, Project 4
// David Tyler Kneisly
// MUI 1206
// Book Tracker
// Gold Main.JS

// Wait until the DOM is ready


var parseBookForm = function(itm){
	console.log(localStorage);
};

// The below script is loaded into DOM when addItem.html is initialized
$('#addItem').bind('pageinit', function(){

	var
	bookForm = $('#addbookform'),
	errorslink = $('#errorslink'),
	submittedlink = $('#submittedlink'),
	favorite = $('#favorite'),
	genreValue,
	genreChecked,
	level,
	favoriteValue = "No"
	;
	
	// Get Element ID's
	// jQuery Mobile method will also work
	function ge(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	// Find value of selected radio button.
	function getSelectedRadio() {
		var radios = document.forms[0].genre;
		for (var i=0; i < radios.length; i++) {
			if (radios[i].checked) {
				genreValue = radios[i].value;
				genreChecked = radios[i];
			}
		}
	}
	function clearSelectedRadio() {
		var chkRadios = document.forms[0].genre;
		for (var i=0; i < chkRadios.length; i++) {
			if (chkRadios[i].checked) {
				$(chkRadios).attr('checked',false).checkboxradio('refresh');
			}
		}
		console.log(chkRadios);
	}
	
	// Find value of Flip Switch 'Favorite'
	function getSliderValue() {
		if (favorite[0].value === "on") {
			favoriteValue = "Yes";
		} else {
			favoriteValue = "No";
		}
	}
	
	function storeData(key) {
		// Generate a new key if the item is new
		if(!key) {
			var id = Math.floor(Math.random()*100000001);
		} else {
			// Set the ID to the existing key if the item is being edited
			id = key;
		}
		getSelectedRadio();
		getSliderValue();
		// Gather up all the form field values and store in an object.
		// Object properties contain an array with the form label and input values
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
		// Data is saved into Local Storage
		// alert('Book is saved!');
	}
	
	function showData() {
		if(localStorage.length === 0) {
			alert('No saved books. Default data was added.');
			autoFillData();
		} else {
			var makeDiv = $('allItems').createElement('div');
			makeDiv.setAttribute('id', 'items');
			makeDiv.setAttribute('data-role', 'content');
			makeDiv.setAttribute('class', 'body');
			var makeList = $('allItems').createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			// Below for-loop looks in Local Storage for data
			for (var i=0, l=localStorage.length; i < l; i++) {
				var makeLi = $('allItems').createElement('li');
				var linksLi = $('allItems').createElement('li');
				makeList.appendChild(makeLi);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				// Below variable converts the string from Local Storage back into an object
				var obj = JSON.parse(value);
				// Below variable and for-loop creates a sub-list and appends to the above list (li)
				var makeSubList = $('allItems').createElement('ul');
				makeLi.appendChild(makeSubList);
				getImage(obj.groups[1], makeSubList);
				for (var n in obj) {
					var makeSubLi = $('allItems').createElement('li');
					makeSubList.appendChild(makeSubLi);
					var optSubText = obj[n][0]+" "+obj[n][1];
					makeSubLi.innerHTML = optSubText;
					makeSubList.appendChild(linksLi);
				}
				// Below function creates Edit and Delete buttons
				makeItemLinks(localStorage.key(i), linksLi);
			}
		}
	}
	

	function clearForm() {
		function clearElements() {
			
			// Type Select
			//$('#groups').selectmenu('refresh',true);
			//$('select').empty().append('<option value="PickOne">Pick One</option>').selectmenu('refresh');
			// Genre
			$('#Science-Fiction').attr('checked',false).checkboxradio('refresh');
			$('#Fantasy').attr('checked',false).checkboxradio('refresh');
			$('#Thriller').attr('checked',false).checkboxradio('refresh');
			$('#Classic').attr('checked',false).checkboxradio('refresh');
			$('#Periodical').attr('checked',false).checkboxradio('refresh');
			$('#Non-Fiction').attr('checked',false).checkboxradio('refresh');
			//$('.error').attr('generated',false).label('refresh');
		}
		clearElements();
		$('clearall').click();
	}
	
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
			$('#geterrors ul').html(output);
			console.log(validator.submitted);
		},

		// Fires when form is submitted and there are no validation errors
		submitHandler: function() {
			storeData(this.key);
			resetForm($('#addbookform'));
		}
	})
	
	$('.reset').click(function() {
		clearForm();
	})
	
	$('.viewall').click(function() {
		showData();	
	})
	
	
});