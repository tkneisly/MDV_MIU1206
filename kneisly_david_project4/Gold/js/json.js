// Week 1, Project 1
// David Tyler Kneisly
// MUI 1206
// Book Tracker (JSON.js)

var json = {
	"book01": {
		"groups": ["Group:","Tablet"],
		"titles": ["Title:", "Once Upon a Mattress"],
		"authors": ["Author:", "Jay Thompson"],
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
		"authors": ["Author:", "Obi Darlin"],
		"readpages": ["Pages:", "1849"],
		"datefinished": ["Date Finished:", "2012-03-22"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Classic"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Apparently, beware of open-toed sandals."]
	},
	"book03": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "Thinking Fourth Dimensionally"],
		"authors": ["Author:", "Emmett Brown"],
		"readpages": ["Pages:", "121"],
		"datefinished": ["Date Finished:", "1985-11-05"],
		"rating": ["Rating:", "10"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "Yes"],
		"note": ["Notes:", "Where we're going, we don't need roads."]
	},
	"book04": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "The Book Case"],
		"authors": ["Author:", "Nelson DeMille"],
		"readpages": ["Pages:", "378"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "4"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 2 on Amazon's Hot New Releases list."]
	},
	"book05": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "Snatched"],
		"authors": ["Author:", "Karin Slaughter"],
		"readpages": ["Pages:", "238"],
		"datefinished": ["Date Finished:", "2012-05-14"],
		"rating": ["Rating:", "2"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Kindle Single."]
	},
	"book06": {
		"groups": ["Group:", "Tablet"],
		"titles": ["Title", "Stolen Prey"],
		"authors": ["Author:", "John Sandford"],
		"readpages": ["Pages:", "164"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 4 on Amazon's Hot New Releases list."]
	},
	"book07": {
		"groups": ["Group:", "Online"],
		"titles": ["Title", "The Long Way Home"],
		"authors": ["Author:", "Karen McQuestion"],
		"readpages": ["Pages:", "242"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 5 on Amazon's Hot New Releases list."]
	},
	"book08": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "The Amateur"],
		"authors": ["Author:", "Edward Klein"],
		"readpages": ["Pages:", "254"],
		"datefinished": ["Date Finished:", "2012-05-14"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 6 on Amazon's Hot New Releases list."]
	},
	"book09": {
		"groups": ["Group:", "Book"],
		"titles": ["Title", "Insurgent (Divergent)"],
		"authors": ["Author:", "Veronica Roth"],
		"readpages": ["Pages:", "362"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 9 on Amazon's Hot New Releases list."]
	},
	"book10": {
		"groups": ["Group:", "Book"],
		"titles": ["Title", "Gone Girl"],
		"authors": ["Author:", "Gillian Flynn"],
		"readpages": ["Pages:", "355"],
		"datefinished": ["Date Finished:", "2011-06-05"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 10 on Amazon's Hot New Releases list."]
	},
	"book11": {
		"groups": ["Group:", "Tablet"],
		"titles": ["Title", "The Serpent's Shadow"],
		"authors": ["Author:", "Rick Riordan"],
		"readpages": ["Pages:", "634"],
		"datefinished": ["Date Finished:", "2012-05-01"],
		"rating": ["Rating:", "8"],
		"category": ["Genre:", "Fantasy"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 11 on Amazon's Hot New Releases list."]
	},
	"book12": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "In One Person"],
		"authors": ["Author:", "John Irving"],
		"readpages": ["Pages:", "232"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "3"],
		"category": ["Genre:", "Periodical"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 12 on Amazon's Hot New Releases list."]
	},
	"book13": {
		"groups": ["Group:", "Book"],
		"titles": ["Title", "The Columbus Affair"],
		"authors": ["Author:", "Steve Berry"],
		"readpages": ["Pages:", "412"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Science-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 13 on Amazon's Hot New Releases list."]
	},
	"book14": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "A Wanted Man"],
		"authors": ["Author:", "Lee Child"],
		"readpages": ["Pages:", "222"],
		"datefinished": ["Date Finished:", "2011-09-11"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 14 on Amazon's Hot New Releases list."]
	},
	"book15": {
		"groups": ["Group:", "Tablet"],
		"titles": ["Title", "Bring Up the Bodies"],
		"authors": ["Author:", "Hilary Mantel"],
		"readpages": ["Pages:", "322"],
		"datefinished": ["Date Finished:", "2012-05-08"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 15 on Amazon's Hot New Releases list."]
	},
	"book16": {
		"groups": ["Group:", "Online"],
		"titles": ["Title", "The Enchantress"],
		"authors": ["Author:", "Michael Scott"],
		"readpages": ["Pages:", "336"],
		"datefinished": ["Date Finished:", "2012-05-22"],
		"rating": ["Rating:", "7"],
		"category": ["Genre:", "Fantasy"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 21 on Amazon's Hot New Releases list."]
	},
	"book17": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "Fearless"],
		"authors": ["Author:", "Eric Blehm"],
		"readpages": ["Pages:", "365"],
		"datefinished": ["Date Finished:", "2012-05-22"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Non-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 22 on Amazon's Hot New Releases list."]
	},
	"book18": {
		"groups": ["Group:", "Book"],
		"titles": ["Title", "I Suck at Girls"],
		"authors": ["Author:", "Justin Halpern"],
		"readpages": ["Pages:", "226"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "5"],
		"category": ["Genre:", "Non-Fiction"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 23 on Amazon's Hot New Releases list."]
	},
	"book19": {
		"groups": ["Group:", "Tablet"],
		"titles": ["Title", "Bloodman"],
		"authors": ["Author:", "Robert Pobi"],
		"readpages": ["Pages:", "121"],
		"datefinished": ["Date Finished:", "2012-05-15"],
		"rating": ["Rating:", "4"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 26 on Amazon's Hot New Releases list."]
	},
	"book20": {
		"groups": ["Group:", "EReader"],
		"titles": ["Title", "The Bourne Imperative"],
		"authors": ["Author:", "Eric Van Lustbader"],
		"readpages": ["Pages:", "452"],
		"datefinished": ["Date Finished:", "2011-06-05"],
		"rating": ["Rating:", "6"],
		"category": ["Genre:", "Thriller"],
		"favs": ["Favorite:", "No"],
		"note": ["Notes:", "Number 27 on Amazon's Hot New Releases list."]
	}
}