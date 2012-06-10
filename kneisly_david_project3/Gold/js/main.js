// Week 1, Project 1
// David Tyler Kneisly
// MUI 1206
// Book Tracker

// Wait until the DOM is ready
window.addEventListener('DOMContentLoaded', function() {


	// getElementById Function
	function ge(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}

	// Create 'Select Field' element, and populate with options
	function makeCats () {
		var formTag = document.getElementsByTagName('form'),
		// This will become an array of all the form tags in the additem.html doc.
		selectLi = ge('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute('id', 'groups');
		for (var i=0, j=bookGroups.length; i < j; i++) {
			var makeOption = document.createElement('option');
			var optText = bookGroups[i];
			makeOption.setAttribute('value', optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	// Find value of selected radio button.
	function getSelectedRadio() {
		var radios = document.forms[0].genre;
		for (var i=0; i < radios.length; i++) {
			if (radios[i].checked) {
				genreValue = radios[i].value;
			}
		}
	}

	// Find value of selected checkboxes.
	function getCheckboxValue() {
		if (ge('favorite').checked) {
			favoriteValue = ge('favorite').value;
		} else {
			favoriteValue = "No";
		}
	}

	// Toggle controls
	function toggleControls(n) {
		switch(n) {
			case 'on':
				ge('bookForm').style.display = "none";
				ge('clear').style.display = "block";
				ge('display').style.display = "none";
				ge('addNew').style.display = "block";
				ge('content').style.display = "none";
				break;
			case 'off':
				ge('bookForm').style.display = "block";
				ge('clear').style.display = "block";
				ge('display').style.display = "block";
				ge('addNew').style.display = "none";
				ge('content').style.display = "block";
				ge('items').style.display = "none";
				ge('bookoutput').style.display = "none";
				break;
			default:
				return false;
		}
	}

	// Store Data
	function storeData(key) {
		// Only generate a new key if it is a new item.
		// If there is no key, this is a new item and needs a new key
		if(!key) {
			var id = Math.floor(Math.random()*100000001);
		} else {
			// Set the id to the existing key if the item is being edited
			// From here, key is passed to the validate function, then into storeData
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
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
		// Data is saved into Local Storage; Using 'Stringify' to convert the object into a string
		alert('Book is saved!');
		window.location.reload();
		scrollTo(0,1);
		return false;
	}

	// Show Data
	function showData () {
		if (localStorage.length === 0) {
			alert('No saved books.  Default data was added.');
			autoFillData();
			toggleControls('off');
		} else {
			// Moved toggleControls to the 'else' statement to avoid disabling the form if there are no saved books to display
			toggleControls('on');
			// Write data from Local Storage to browser
			// The next 4 lines create a container (div & ul) for writing data to
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute('id', 'items');
			var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			// Below for-loop looks in Local Storage for data
			for (var i=0, l=localStorage.length; i < l; i++) {
				var makeLi = document.createElement('li');
				var listTag = makeLi.setAttribute('id', 'bookoutput');
				var linksLi = document.createElement('li');
				makeList.appendChild(makeLi);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				// Below variable converts the string from Local Storage back into an object
				var obj = JSON.parse(value);
				// Below variable and for-loop creates a sub-list and appends to the above list (li)
				var makeSubList = document.createElement('ul');
				makeLi.appendChild(makeSubList);
				getImage(obj.groups[1], makeSubList);
				for (var n in obj) {
					var makeSubLi = document.createElement('li');
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
	// Function for returning to the form from displayed data (toggle on)
	function addNewBook () {
		toggleControls('off');
	}

	// Get image for the group/category being displayed
	function getImage(catName, makeSubList) {
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute('src', 'images/'+catName+'.png');
		imageLi.appendChild(newImg);
	}

	// Auto Populate Local Storage
	function autoFillData() {
		// The JSON Object data required is coming from json.js file.
		// Below function stors JSON data into Local Storage.
		for (var n in json) {
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}

	// Make Item Links
	// Creates the edit and delete links for each stored item displayed.
	function makeItemLinks(key, linksLi) {
		// Create the Edit link. Receives 'key' from showData function.
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Book";
		editLink.addEventListener('click', editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Adds a line break between ahrefs
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);

		// Create the Delete link.  Receives 'key' from showData function.
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Book";
		deleteLink.addEventListener('click', deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}

	// Edit a Single Item
	function editItem() {
		// Get data from item from Local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		// Show the form
		toggleControls('off');

		// Populate the form fields with current localStorage values.
		ge('groups').value = item.groups[1];
		ge('booktitle').value = item.titles[1];
		ge('author').value = item.authors[1];
		ge('pages').value = item.readpages[1];
		ge('date').value = item.datefinished[1];
		ge('level').value = item.rating[1];
		ge('rating').value = item.rating[1];
		var radios = document.forms[0].genre;
		for (var i=0; i < radios.length; i++) {
			if (radios[i].value == "Science-Fiction" && item.category[1] == "Science-Fiction") {
				radios[i].setAttribute('checked', 'checked');
			} else if (radios[i].value == "Fantasy" && item.category[1] == "Fantasy") {
				radios[i].setAttribute('checked', 'checked');
			} else if (radios[i].value == "Thriller" && item.category[1] == "Thriller") {
				radios[i].setAttribute('checked', 'checked');
			} else if (radios[i].value == "Classic" && item.category[1] == "Classic") {
				radios[i].setAttribute('checked', 'checked');
			} else if (radios[i].value == "Periodical" && item.category[1] == "Periodical") {
				radios[i].setAttribute('checked', 'checked');
			} else if (radios[i].value == "Non-Fiction" && item.category[1] == "Non-Fiction") {
				radios[i].setAttribute('checked', 'checked');
			}
		}
		if (item.favs[1] == "Yes") {
			ge('favorite').setAttribute('checked', 'checked');
		}
		ge('notes').value = item.note[1];

		// Remove the initial listener from the input 'Save Book'
		saveBook.removeEventListener('click', storeData);
		// Change the submit button value to say 'Edit
		ge('submit').value = "Save Edits";
		var editSubmit = ge('submit');
		// Save the key value as a property of the editSubmit event
		editSubmit.addEventListener('click', validate);
		editSubmit.key = this.key;
	}

	// Delete Item
	function deleteItem() {
		var ask = confirm("Are you sure you want to delete?");
		if(ask) {
			localStorage.removeItem(this.key);
			alert("Deleted!");
			window.location.reload();
		} else {
			alert("The book is still saved!");
		}
	}

	// Clear Data
	function clearData() {
		if(localStorage.length === 0) {
			alert('No books to clear');
			scrollTo(0,1);
		} else {
			var ask = confirm("Are you sure you want to clear all data?");
			if(ask) {
				alert('All books deleted');
				window.location.reload();
				localStorage.clear();
				return false;
			} else {
				alert("Your books are still saved!");
			}			
		}
	}

	function validate(e) {
		// Define the elements to be checked
		var getGroup = ge('groups');
		var getTitle = ge('booktitle');
		var getAuthor = ge('author');
		var getPages = ge('pages');
		var getDate = ge('date');
		var errorBox = ge('errors');

		// Reset the Error Mesages
		errMsg.innerHTML = "";
		getGroup.style.border = "1px solid black";
		getTitle.style.border = "1px solid black";
		getAuthor.style.border = "1px solid black";
		getPages.style.border = "1px solid black";
		getDate.style.border = "1px solid black";
		errorBox.style.border = "1px solid #aaa";

		// Get error messages
		var messageAry = [];
		// Group Validation
		if(getGroup.value === "--Choose a Source--") {
			var groupError = "Please choose a source.";
			getGroup.style.border = "1px solid #b60200";
			errorBox.style.border = "1px solid #b60200";
			messageAry.push(groupError);
		}
		// Title Validation (RegExp)
		if(getTitle.value === "") {
			var titleError = "Please enter a book title.";
			getTitle.style.border = "1px solid #b60200";
			errorBox.style.border = "1px solid #b60200";
			messageAry.push(titleError);
		}
		// Author Validation
		if(getAuthor.value === "") {
			var authorError = "Please enter an author's name.";
			getAuthor.style.border = "1px solid #b60200";
			errorBox.style.border = "1px solid #b60200";
			messageAry.push(authorError);
		}
		// Pages Validation
		if(getPages.value === "") {
			var pagesError = "Please enter the # of pages.";
			getPages.style.border = "1px solid #b60200";
			errorBox.style.border = "1px solid #b60200";
			messageAry.push(pagesError);
		}
		// Date Validation using RegEx
		var re = /^[12][09][\d][\d]-[01]?[\d]-[0-3]?[\d]$/;
		if(!(re.exec(getDate.value))) {
			var dateError = "Please enter a valid date.";
			getDate.style.border = "1px solid #b60200";
			errorBox.style.border = "1px solid #b60200";
			messageAry.push(dateError);
		}
		// If there are errors, display messages
		if(messageAry.length >= 1) {
			for(var i=0, j=messageAry.length; i < j; i++) {
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			alert("Please fill in the required fields.");
			scroll(0,0);
			e.preventDefault();
			return false;
		} else {
			// Save data if all the above if conditions are ok
			// As local storage is being looped through, the key is saved as a property to a variable
			// The current loop's iteration of the key property is passed here.
			// Send the key value back to local storage
			storeData(this.key);
		}
	}

	// Defaults for Variables
	var 
	bookGroups = ["--Choose a Source--", "Book", "EReader", "Tablet", "Online"],
	genreValue,
	favoriteValue = "No",
	errMsg = ge('errors'),
	level
	;
	
	makeCats();
	
	var displayBooks = ge('display');
	displayBooks.addEventListener('click', showData);
	var clearBooks = ge('clear');
	clearBooks.addEventListener('click', clearData);
	var addBooks = ge('addNew');
	addBooks.addEventListener('click', addNewBook);
	// The saveBook variable now it instructs the validate function to be triggered first.
	var saveBook = ge('submit');
	saveBook.addEventListener('click', validate);
	//Hides the address bar when page loads.
	var hideAddress = window.scrollTo(0,1);
	window.addEventListener('load', hideAddress);
});