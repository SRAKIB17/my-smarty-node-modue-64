/**
 * 1. create folder (manually or mkdir)
 * 2. open command line to that folder
 * 3. $ npm init 
 * 4. $ npm install express
 * 5.create index.js
 * 
 * __________________________
 * For Express/ node Server
 * __________________________
 * 1. require express => const express = require('express');
 * 2. create app variable => const app = express()
 * 3. declare port => const port = process.env.PORT || 5000;
 * 4. set app.get('/') => app.get('/',(req, res)=>{})
 * 5. listen to port => app.listen(port,()=>{})
 * 6. node index.js => run command line
 * 7. check your browser for that port => localhost:port
 */