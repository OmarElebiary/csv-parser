# csv-parser

A Simple CSV file parser.

```
npm install @omarelebiary/simple-csv-parser
```

`csv-parser` can convert CSV into JSON or array.

## Usage

Simply instantiate `CSVParser` and put a csv file to it and get the rows out

### Example
Let's say that we have a CSV file ``data1.csv`` :

```
full name, AGE, STATUS
John Doe 1, 24, ACTIVE
John Doe 2, 22, BLOCKED
John Doe 3, 25, ACTIVE
```

You can parse it like this:

``` js
const Parser = require('@omarelebiary/simple-csv-parser');
let parser = new Parser('test/dataset/data1.csv', {delimiter: ',', headers: true});

parser.parseCSV().then((data) => {
  console.log(data);
});
```

Output:

```
[ { 'full name': 'John Doe 1',
    ' AGE': ' 24',
    ' STATUS': ' ACTIVE' },
  { 'full name': 'John Doe 2',
    ' AGE': ' 22',
    ' STATUS': ' BLOCKED' },
  { 'full name': 'John Doe 3',
    ' AGE': ' 25',
    ' STATUS': ' ACTIVE' } ]
```

The returned data is a JSON object. Header is used as the property name of the object.

The csv constructor accepts the following options

``` js
let parser = new Parser('path to file', {options});

options {
  delimiter: ',', // Specify the delimiter to be used. Default: ','
  headers: true   // Use first row as keys in JSON. Default: false
}
```