import  express  from 'express';
import ejs from 'ejs';
import fetch from 'node-fetch';

const app = express();

// fetch('http://www.cbr.ru/scripts/XML_daily.asp')
//         .then(response => response.text())
//         .then(data => console.log(data));

app
    .set("view engine", "ejs")
    .set("views", "views")


app.get('/', (req, res) => {
    res.render('./index');
}) 


app.listen(80, () => {
    console.log('Server has been started...');
})