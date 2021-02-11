const express = require(`express`), app = express();
app.set(`view engine`, `ejs`);
app.set()
// serve static files from the `public` folder
//app.use(express.static(__dirname + '/public'));
app.get(`/`, (req, res) => res.render('index'));
app.get(`/i`, (req, res) => res.render('index'));
app.get(`/style.css`, (req, res) => res.sendFile(`${__dirname}/views/style.css`));
app.get(`/particle.min.js`, (req, res) => res.sendFile(`${__dirname}/views/particle.min.js`));
// ------------------------------------------
//The 404 Route (ALWAYS Keep this as the last route)
app.get(`*`, (req, res) => res.status(404).send(`404`));
const server = app.listen(6969, () => console.log(`Web Server Running On Port http://localhost:${server.address().port}`));