// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Define the color scale for gauge chart
let colorScale = d3.scaleLinear().domain([0,10]).range(["lightgreen", "darkgreen"]).interpolate(d3.interpolateHcl);

// Initialize the dashboard at start up 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(url).then((data) => {
        
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

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the initial plots
        buildGaugeChart(sample_one);
    });
};

// Function that builds the gauge chart
function buildGaugeChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Use Object.entries to get the key/value pairs and put into the demographics box on the page
        let washFrequency = Object.values(valueData)[6];
        
        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFrequency,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: colorScale(0)},
                    {range: [1, 2], color: colorScale(1)},
                    {range: [2, 3], color: colorScale(2)},
                    {range: [3, 4], color: colorScale(3)},
                    {range: [4, 5], color: colorScale(4)},
                    {range: [5, 6], color: colorScale(5)},
                    {range: [6, 7], color: colorScale(6)},
                    {range: [7, 8], color: colorScale(7)},
                    {range: [8, 9], color: colorScale(8)},
                    {range: [9, 10], color: colorScale(9)},
                ]
            } 
        };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

// Call the initialize function
init();