// CSV Parser
// ==========
// A Simple CSV file parser.
//
// Use examples:
//
//     parser = new Parser('path to csv file', options argument);
//	   
//     Options argument:
//         {
//         	delimiter: ',' 		// Delimiter used for spliting line values. Default value: ','
//         	headers: true 		// Use the values of first row as keys in JSON. Default value is false.
//	   }
//		
//     Example:
//     	let parser = new CSVParser('data.csv', {delimiter: ',', headers: false})
//     	parser.parseCSV() // start parsing the given CSV file using provided options and returns the parsed data.
//     	parser.parseCSV().then((data) => {
//	    console.log(data);
//     	});
//
// ==========================
// Created by: Omar Elebiary
// ==========================

// Require file stream api to read csv files
let fs = require('fs');

class CSVParser {

	// Initialize dilimeter and headers option in constructor
	constructor(csvFile, options = {delimiter: ',', headers: false}) {
		this.csvFile = csvFile;
		this.options = options;
		this.parsedData = [];
	}
	
	// Read and parse the csv file and return final data.
	parseCSV() {
		// Return a new promise to make sure all the file is loaded
		return new Promise((resolve, reject) => {
		    fs.readFile(this.csvFile, (err, fileData) => {
		    	// Throws error if not exists
		        if (err) {
		        	console.error(err);
		            throw err;
		        }
		        // Separate all lines
		        let data = fileData.toString().split('\n');
		        // Check if headers available generate array of objects else generate array of arrays
		        if (this.options.headers) {
		        	// Get headers from first row
		        	let headers = data[0].trim().split(this.options.delimiter);
		        	data.shift();
		        	// Create json 
		        	this.parsedData = this.createJson(headers, this.createArray(data));
		        } else {
		        	// Create an array of arrays
		        	this.parsedData = this.createArray(data);
		        }
		        resolve(this.parsedData);
		    });		
		})
	}

	// Create an array of arrays
	createArray(data) {
		// Split all lines by the delimiter and create an array with row values
		for (let i = 0; i < data.length; i++) {
			data[i] = data[i].trim().split(this.options.delimiter);
		}
		return data;
	}

	// Generate array of objects, using the first row as keys
	createJson(headers, data) {
		let finalJson = [];

		for (let i = 0; i < data.length; i++) {
			let obj = {};
			for (let j = 0; j < data[i].length;j++) {
				obj[headers[j]] = data[i][j];
			}
			finalJson.push(obj);
		}
		return finalJson;
	}
}

module.exports = CSVParser;
