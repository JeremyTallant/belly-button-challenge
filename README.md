# Belly Button Challenge

<img width="1440" alt="Screenshot 2023-01-11 at 8 20 45 AM" src="https://user-images.githubusercontent.com/112406455/211830221-402ccbc8-c54d-4ed5-aede-62222434b299.png">

## Deployment
* Here is a link to the dashboard: https://jeremytallant.github.io/belly-button-challenge/

## Background
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
## Instructions
Complete the following steps:
 
 1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use `sample_values` as the values for the bar chart.
    * Use `otu_ids` as the labels for the bar chart.
    * Use `otu_labels` as the hovertext for the chart.
    
    <img width="366" alt="Screenshot 2023-01-10 at 11 13 39 AM" src="https://user-images.githubusercontent.com/112406455/211620197-c3b86bf9-748a-4bff-a1bf-2cad787fd612.png">

 3. Create a bubble chart that displays each sample.
    * Use `otu_ids` for the x values.
    * Use `sample_values` for the y values.
    * Use `sample_values` for the marker size.
    * Use `otu_ids` for the marker colors.
    * Use `otu_labels` for the text values.
    
    <img width="913" alt="Screenshot 2023-01-10 at 11 13 56 AM" src="https://user-images.githubusercontent.com/112406455/211619955-8c6f1d82-a564-4864-acaf-bbdca0d46e49.png">

  4. Display the sample metadata, i.e., an individual's demographic information.

  5. Display each key-value pair from the metadata JSON object somewhere on the page.
  
  <img width="129" alt="Screenshot 2023-01-10 at 11 13 47 AM" src="https://user-images.githubusercontent.com/112406455/211618894-2843388f-9215-4627-841e-47013cd96100.png">

  6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

  7. Deploy your app to a free static page hosting service, such as GitHub Pages.
  
## Advanced Challenge Assignment
 * Adapt the Gauge Chart from [https://plot.ly/javascript/gauge-charts/](https://plotly.com/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.
 * You will need to modify the example gauge code to account for values ranging from 0 through 9.
 * Update the chart whenever a new sample is selected.
 
 <img width="321" alt="Screenshot 2023-01-10 at 11 19 42 AM" src="https://user-images.githubusercontent.com/112406455/211619467-9e89e61a-2016-4a84-a380-fc542e2ba08f.png">
 
## File Organization and Structure
* Located in the parent directory are three folders and the [index.html](https://github.com/tallantj95/belly-button-challenge/blob/main/index.html) file.
* The [Resources](https://github.com/tallantj95/belly-button-challenge/tree/main/Resources) folder contains the [samples.json](https://github.com/tallantj95/belly-button-challenge/blob/main/Resources/samples.json) file as a reference.
* The [assets](https://github.com/tallantj95/belly-button-challenge/tree/main/assets) folder contains a [css](https://github.com/tallantj95/belly-button-challenge/tree/main/assets/css) folder which houses the [styles.css](https://github.com/tallantj95/belly-button-challenge/blob/main/assets/css/styles.css) file used for customization of the dashboard.
* The [static](https://github.com/tallantj95/belly-button-challenge/tree/main/static/js) folder contains the two javascript files [app.js](https://github.com/tallantj95/belly-button-challenge/blob/main/static/js/app.js) and [bonus.js](https://github.com/tallantj95/belly-button-challenge/blob/main/static/js/bonus.js) that were used to build the dashboard.

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

© 2023 edX Boot Camps LLC






