import fs from 'fs';

fs.readFile('./Projects.json','utf-8',(err,data) => {
    console.log(data)
});

