// Fetch the JSON data and parse it
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  // Log the entire data object to the console
  console.log(data);


    // Select the dropdown menu
    var dropdownMenu = d3.select("#dropdown");
    // Populate the dropdown menu with the names of the individuals
    dropdownMenu.selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .text(function(d) { return d; });

    // Function to create the bar chart
    function createBarChart(individual) {
    // Find the individual's data in the samples array
    var individualData = data.samples.find(function(d) {
        return d.id == individual;
    });
    // Log the individual's data to the console
    console.log(individualData);

    // Sort the sample values in descending order
    var sortedSampleValues = individualData.sample_values.sort(function(a, b) {
        return b - a;
    });
    // Log the sorted sample values to the console
    console.log(sortedSampleValues);

    // Get the top 10 sample values and their corresponding OTU IDs and labels
    var top10SampleValues = sortedSampleValues.slice(0, 10);
    var top10OtuIds = individualData.otu_ids.slice(0, 10);
    var top10OtuLabels = individualData.otu_labels.slice(0, 10);
    // Log the top 10 sample values, OTU IDs, and labels to the console
    console.log(top10SampleValues, top10OtuIds, top10OtuLabels);

    // Create the trace for the bar chart
    var trace = {
        x: top10SampleValues,
        y: top10OtuIds.map(function(d) { return "OTU " + d; }),
        text: top10OtuLabels,
        type: "bar",
        orientation: "h"
    };
    var layout = {
        title: `Top 10 OTUs for Individual ${individual}`
    };
    var data = [trace];
    Plotly.newPlot("bar", data, layout);
    }

    // Create the bar chart for the first individual in the list
    createBarChart(data.names[0]);

        // Update the bar chart when a new individual is selected from the dropdown menu
        dropdownMenu.on("change", function() {
        var selectedIndividual = d3.select(this).property("value");
        createBarChart(selectedIndividual);
    });
});