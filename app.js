const express =  require('express');
conse app = express();

app.get('/',(req, res) => {
  res.send('Hello World from Github using Node.js!');
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
  console.log('App listening on port ${PORT}');
});
