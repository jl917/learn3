const data = require('./data.json');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const cp = req.query.page || 1;
  const db = [];
  const current = (cp - 1) * 10;
  for (let i = current; i < current + 10; i++) {
    db.push(data.results[i]);
  }
  res.json(db);
})

// 将文件 serve 到 port 3000。
app.listen(9999, function () {
  console.log('Example app listening on port 9999!\n');
});
