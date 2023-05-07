const fs = require('fs');
const path = require('path');
const {parse, join} = path;

const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, (err, files) => {
    if (err) throw err;

    files.forEach((item) => {
        const file = parse(item);
        fs.stat(
            join(pathToFolder, item),
            (err, stats) => {
                if (err) throw err;

                if (stats.isFile()) 
                console.log(`${file.name} - ${file.ext.slice(1)} - ${Number(stats.size / 1024)}kb`);
            }
        )
    })  
})
