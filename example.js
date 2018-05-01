const Parser = require('@omarelebiary/simple-csv-parser');
let parser = new Parser('test/dataset/data1.csv', {delimiter: ',', headers: true});

parser.parseCSV().then((data) => {
	console.log(data);
});
