const express = require('express');
const app = express();
const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR;
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/:input', (req, res) => {
	input = req.params.input;

	const csvFilePath = 'testdata.csv';
	let csvData = [], X = [], y = [];

	let regressionModel;
	csv()
	.fromFile(csvFilePath)
	.subscribe(jsonObj => {
		csvData.push(jsonObj);
		})
	.on('done',() => {
		dressData();
		performRegression();
	return res.json({"id":1,"y":parseFloat(s)});
	});
  
function performRegression() {
	regressionModel = new SLR(X,y);
	console.log(regressionModel.toString(3));
	z = regressionModel.predict(parseFloat(input));
	s = z.toFixed(3);
	console.log(`At X = ${input},y = ${s}`);

	}
		
function dressData() {
csvData.forEach((row) => {
	X.push(f(row.x));
	y.push(f(row.y));
	});
}

function f(s) {
	return parseFloat(s);
	}
	
function predictOutput() {
	y = regressionModel.predict(parseFloat(input));
	console.log(`At X = ${input},y = ${y}`);
	return y;
	}
 });


app.listen((process.env.PORT || 5000), () => {
    console.log("Server is up and running...");
});

