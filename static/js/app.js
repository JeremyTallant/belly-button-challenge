// Save url as a constant variable
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it 
d3.json(samples).then(function(data) {
    console.log(data);
});