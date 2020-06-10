var express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname,'public')))
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')
    .get('/', (req,res)=>res.render('pages/main_page'))
    .listen(PORT, ()=>console.log('Listening on ${PORT}'))

// const {Client} = require('pg');
// const connectionString = 'postgres://wiucfmzirbegqr:9624d9c375c7f9c8bc973d6396545a3a3d789e6e73a73df5e5bbb1ed519fe234@ec2-23-20-129-146.compute-1.amazonaws.com:5432/dbh1gu7tl09u8';

// const client = new Client({
//     connectionString: connectionString,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

//     client.connect();
//     //client.query('SELECT DISTINCT * FROM source WHERE title LIKE \'%Empirical%\'', (err, res) => {
//     client.query('SELECT s.title, array_to_string(array_agg(a.last_name), \',\') AS "Authors" FROM source s INNER JOIN authorsrc ass ON s.id = ass.source_id INNER JOIN author a ON a.id = ass.author_id WHERE s.title LIKE \'%Empirical%\' GROUP BY s.title', 
//      (err, res) => {
         
//     console.log(err, res);
//     client.end();
// })
