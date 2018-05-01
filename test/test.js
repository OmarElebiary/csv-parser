const CSVParser = require("../CSVParser");

describe("CSVParser", function() {

    describe("parseCSV()", function() {

        it("should return empty array if empty file", () => {
        	let parser = new CSVParser('test/dataset/emptyFile.csv');
			return parser.parseCSV().then(data => {
			    expect(data).toHaveLength(1);
			});   
        });

        it("should return array of objects if headers allowed", function() {
        	let parser = new CSVParser('test/dataset/data1.csv', {delimiter: ',', headers: true});
        	setTimeout(() => {}, 1000);
            let expected = [ { 'full name': 'John Doe 1', ' AGE': ' 24', ' STATUS': ' ACTIVE' },{ 'full name': 'John Doe 2',' AGE': ' 22',' STATUS': ' BLOCKED' },{ 'full name': 'John Doe 3', ' AGE': ' 25', ' STATUS': ' ACTIVE' } ];
            return parser.parseCSV().then(data => {
                expect(data).toEqual(expected);
            }); 
        });

        it("should return array of arrays if headers disabled", function() {
        	let parser = new CSVParser('test/dataset/data1.csv', {delimiter: ',', headers: false});
        	setTimeout(() => {}, 1000);
            let expected = [["full name", " AGE", " STATUS"], ["John Doe 1", " 24", " ACTIVE"], ["John Doe 2", " 22", " BLOCKED"], ["John Doe 3", " 25", " ACTIVE"]];
            return parser.parseCSV().then(data => {
                expect(data).toEqual(expected);
            }); 
        });

        it("should handle different delimiters as ;", function() {
        	let parser = new CSVParser('test/dataset/data2.csv', {delimiter: ';', headers: true});
        	setTimeout(() => {}, 1000);
            let expected = [ { 'full name': 'John Doe 1', ' AGE': ' 24', ' STATUS': ' ACTIVE' },{ 'full name': 'John Doe 2',' AGE': ' 22',' STATUS': ' BLOCKED' },{ 'full name': 'John Doe 3', ' AGE': ' 25', ' STATUS': ' ACTIVE' } ];
            return parser.parseCSV().then(data => {
                expect(data).toEqual(expected);
            }); 
        });

        it("should handle different delimiters as \\t", function() {
        	let parser = new CSVParser('test/dataset/data3.csv', {delimiter: '\t', headers: true});
        	setTimeout(() => {}, 1000);
            let expected = [ { 'full name': 'John Doe 1', ' AGE': ' 24', ' STATUS': ' ACTIVE' },{ 'full name': 'John Doe 2',' AGE': ' 22',' STATUS': ' BLOCKED' },{ 'full name': 'John Doe 3', ' AGE': ' 25', ' STATUS': ' ACTIVE' } ];
            return parser.parseCSV().then(data => {
                expect(data).toEqual(expected);
            }); 
        });

        it("should handle different delimiters as |", function() {
        	let parser = new CSVParser('test/dataset/data4.csv', {delimiter: '|', headers: true});
        	setTimeout(() => {}, 1000);
            let expected = [ { 'full name': 'John Doe 1', ' AGE': ' 24', ' STATUS': ' ACTIVE' },{ 'full name': 'John Doe 2',' AGE': ' 22',' STATUS': ' BLOCKED' },{ 'full name': 'John Doe 3', ' AGE': ' 25', ' STATUS': ' ACTIVE' } ];
            return parser.parseCSV().then(data => {
                expect(data).toEqual(expected);
            }); 
        });

    });
})