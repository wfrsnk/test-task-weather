import  express  from 'express';
import ejs from 'ejs';
import fetch from 'node-fetch';
import converter from 'xml-js';

const PORT = process.env.PORT || 80;
const app = express();

app
    .set("view engine", "ejs")
    .set("views", "views")

app.get('/api/data', (req, res) => {
    fetch('http://www.cbr.ru/scripts/XML_daily.asp')
        .then(response => response.text())
        .then(data => res.send(JSON.parse(converter.xml2json(data, {compact: true, spaces: 4}))));
    })
app.get('/', (req, res) => {
    res.render('./index');
}) 

app.listen(PORT, () => {
    console.log('Server has been started...');
})