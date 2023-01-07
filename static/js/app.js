// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the dashboard at start up 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Set a variable for the sample names
    let names = data.names;

    // Add  samples to dropdown menu
    names.foreach((id) => {
        // Log the value of id for each iteration of the loop
        console.log(id);
        select.append("option")
        .text(id)
        .property("value",id);

    });

    // Set the first sample from the list to build the initial plots
    let sample_one = names[0];
    // Log the value of sample_one
    console.log(sample_one);
    buildMetadata(sample_one);
    buildBarChart(sample_one);
    buildBubbleChart(sample_one);
}