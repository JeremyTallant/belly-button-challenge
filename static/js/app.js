// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

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
    names.forEach((id) => {

        // Log the value of id for each iteration of the loop
        console.log(id);

        dropdownMenu.append("option")
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

// Function that populates metadata info
function buildMetadata(sample) {

    // Use D3 to get all of the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Clear out metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

}