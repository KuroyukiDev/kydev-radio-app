var express = require('express');
const hbs = require('hbs');
var animeData = require('./public/anime_lib').animeData;

const port = process.env.PORT || 3000;
var app = express();

// hbs.registerPartials(__dirname + '/views');
app.set('view engine', 'hbs');


// Mainenance Page Activator
// (INFO: Comment out to deactivate Maintenance Page - Uncomment to activate it)

// app.use((req,res,next) => {
// 	res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
		pageTitle: 'Home Page'
	});
});

app.get('/youtube-irc', (req, res) => {
  res.render('youtube-irc-list.hbs', {
    pageTitle: 'YouTube IRCs List'
  });
});
app.get('/youtube-irc/:id', (req, res) => {
    var id = req.params.id;
    if (id === 'anime-live-irc-1') {
        res.render('yt-player.hbs', {
            vidTitle: "Kawaii Anime Music Live",
            vidurl: "https://www.youtube.com/embed/PRlAY486hVg?rel=0&amp;showinfo=0"
        });
    } else if (id === 'anime-live-irc-2') {
        res.render('yt-player.hbs', {
            vidTitle: "Anime Music Live",
            vidurl: "https://www.youtube.com/embed/hWYRTIo6enA?rel=0&amp;showinfo=0"
        });
    }
});



app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
