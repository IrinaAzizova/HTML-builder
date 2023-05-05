const fs = require('fs');
const path = require('path');
const {stdout, stdin, exit} = process;

const urlTxtFile = path.join(__dirname, 'text.txt');

fs.writeFile(urlTxtFile, '', err => {
    if (err) throw err;
    stdout.write('Hello! Tell me any something.\n');
});

stdin.on('data', data => {
    if (data.toString().trim() == 'exit') {
      stdout.write('Bye! It was very fun.');
      exit();
    } else {
        fs.appendFile(urlTxtFile, data, err => {
            if (err) throw err;
        });
    }    
});

process.on('SIGINT', () => {
    stdout.write('Bye! It was very fun.');
    exit()
});