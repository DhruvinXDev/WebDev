const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/hello/:slug', (req , res)=> {
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) 
    res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})