// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 4000;

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// app.use(bodyParser.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: '1234',
//     database: 'scc',
// });

// db.connect(err => {
//     if (err) {
//         console.error('MySQL 연결 중 에러 발생:', err);
//       } else {
//         console.log('MySQL에 연결되었습니다');
//       }
// });

// app.get('/api/store', (req, res) => {
//     const query = 'SELECT * FROM store';
//     db.query(query, (err, results) => {
//         if(err) throw err;
//         res.json(results);
//     });
// });

// app.listen(PORT, () => {
//     console.log(`서버가 ${PORT}번 포트에서 실행 중 입니다`)
// })