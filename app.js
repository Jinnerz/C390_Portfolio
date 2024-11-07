const express = require('express');
const app = express();
app.use(express.static('public')); // Helps find images easier

app.set('view engine', 'ejs');


// HOME PAGE
app.get('/', function(req, res) {
    res.render('home');
});

// PROJECTS PAGE
app.get('/projects', function(req, res) {
    res.render('projects');
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});