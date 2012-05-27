// Week 4, Project 4
// David Tyler Kneisly
// VFW 1205
// Book Tracker (JSON.js)

var json = {
	"book01": {
		"groups": ["Group:","Tablet"],
		"titles": ["Title:", "Once Upon a Mattress"],
		"authors": ["Author:", "Thompson, Jay"],
		"readpages": ["Pages:", "1959"],
		"datefinished": ["Date Finished:", "2008-06-20"],
		"rating": ["Rating:", "8"],
		"category": ["Genre:", "Fantasy"],
		"favs": ["Favorite:", "Yes"],
		"note": ["Notes:", "She certainly liked almost both his parents."]
	},
	"book02": {
		"groups": ["Group:","Book"],
		"titles": ["Title:", "Clementine's Decent"],
		"authors": ["Author:", "Darling, Obi"],
		"readpages": ["Pages:", "1849"],
		"datefinished": ["Date Finished:", "2012-03-22"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Classic"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Apparently, beware of open-toed sandals."]
	},
	"book03": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "Thinking Fourth Dimensionally"],
		"authors": ["Author:", "Brown, Emmett"],
		"readpages": ["Pages:", "121"],
		"datefinished": ["Date Finished:", "1985-11-05"],
		"rating": ["Rating:", "10"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "Yes"],
		"note": ["Notes:", "Where we're going, we don't need roads."]
	},
	"book04": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "The Book Case"],
		"authors": ["Author:", "DeMille, Nelson"],
		"readpages": ["Pages:", "378"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "4"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 2 on Amazon's Hot New Releases list."]
	},
	"book05": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "Snatched"],
		"authors": ["Author:", "Slaughter, Karin"],
		"readpages": ["Pages:", "238"],
		"datefinished": ["Date Finished:", "2012-05-14"],
		"rating": ["Rating:", "2"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Kindle Single."]
	},
	"book06": {
		"groups": ["Group:", "Tablet"],
		"title": ["Title", "Stolen Prey"],
		"authors": ["Author:", "Sandford, John"],
		"readpages": ["Pages:", "164"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 4 on Amazon's Hot New Releases list."]
	},
	"book07": {
		"groups": ["Group:", "Online"],
		"title": ["Title", "The Long Way Home"],
		"authors": ["Author:", "McQuestion, Karen"],
		"readpages": ["Pages:", "242"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 5 on Amazon's Hot New Releases list."]
	},
	"book08": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "The Amateur"],
		"authors": ["Author:", "Klein, Edward"],
		"readpages": ["Pages:", "254"],
		"datefinished": ["Date Finished:", "2012-05-14"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 6 on Amazon's Hot New Releases list."]
	},
	"book09": {
		"groups": ["Group:", "Book"],
		"title": ["Title", "Insurgent (Divergent)"],
		"authors": ["Author:", "Roth, Veronica"],
		"readpages": ["Pages:", "362"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 9 on Amazon's Hot New Releases list."]
	},
	"book10": {
		"groups": ["Group:", "Book"],
		"title": ["Title", "Gone Girl"],
		"authors": ["Author:", "Flynn, Gillian"],
		"readpages": ["Pages:", "355"],
		"datefinished": ["Date Finished:", "2011-06-05"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 10 on Amazon's Hot New Releases list."]
	},
	"book11": {
		"groups": ["Group:", "Tablet"],
		"title": ["Title", "The Serpent's Shadow"],
		"authors": ["Author:", "Riordan, Rick"],
		"readpages": ["Pages:", "634"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "8"],
		"category": ["Genre:", "Fantasy"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 11 on Amazon's Hot New Releases list."]
	},
	"book12": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "In One Person"],
		"authors": ["Author:", "Irving, John"],
		"readpages": ["Pages:", "232"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "3"],
		"category": ["Genre:", "Periodical"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 12 on Amazon's Hot New Releases list."]
	},
	"book13": {
		"groups": ["Group:", "Book"],
		"title": ["Title", "The Columbus Affair"],
		"authors": ["Author:", "Berry, Steve"],
		"readpages": ["Pages:", "412"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 13 on Amazon's Hot New Releases list."]
	},
	"book14": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "A Wanted Man"],
		"authors": ["Author:", "Child, Lee"],
		"readpages": ["Pages:", "222"],
		"datefinished": ["Date Finished:", "2011-09-11"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 14 on Amazon's Hot New Releases list."]
	},
	"book15": {
		"groups": ["Group:", "Tablet"],
		"title": ["Title", "Bring Up the Bodies"],
		"authors": ["Author:", "Mantel, Hilary"],
		"readpages": ["Pages:", "322"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 15 on Amazon's Hot New Releases list."]
	},
	"book16": {
		"groups": ["Group:", "Online"],
		"title": ["Title", "The Enchantress"],
		"authors": ["Author:", "Scott, Michael"],
		"readpages": ["Pages:", "336"],
		"datefinished": ["Date Finished:", "2012-05-22"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Fantasy"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 21 on Amazon's Hot New Releases list."]
	},
	"book17": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "Fearless"],
		"authors": ["Author:", "Blehm, Eric"],
		"readpages": ["Pages:", "365"],
		"datefinished": ["Date Finished:", "2012-05-22"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Non-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 22 on Amazon's Hot New Releases list."]
	},
	"book18": {
		"groups": ["Group:", "Book"],
		"title": ["Title", "I Suck at Girls"],
		"authors": ["Author:", "Halpern, Justin"],
		"readpages": ["Pages:", "226"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Non-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 23 on Amazon's Hot New Releases list."]
	},
	"book19": {
		"groups": ["Group:", "Tablet"],
		"title": ["Title", "Bloodman"],
		"authors": ["Author:", "Pobi, Robert"],
		"readpages": ["Pages:", "121"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "4"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 26 on Amazon's Hot New Releases list."]
	},
	"book20": {
		"groups": ["Group:", "EReader"],
		"title": ["Title", "The Bourne Imperative"],
		"authors": ["Author:", "Lustbader, Eric Van"],
		"readpages": ["Pages:", "452"],
		"datefinished": ["Date Finished:", "2011-06-05"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 27 on Amazon's Hot New Releases list."]
	}
}