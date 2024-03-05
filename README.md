# BioD3: Visualizing Microbial Ecosystems
![image](images/homepage.png)
## Project Overview
This project embarks on an interactive exploration of microbial data from various individuals, leveraging the D3.js library to parse and visualize information from a comprehensive JSON dataset. At its core, the initiative aims to unveil the top Operational Taxonomic Units (OTUs) present in individuals, employing a variety of dynamic visualizations such as horizontal bar charts and bubble charts to represent the data's complexity and richness. Through an intuitive interface featuring dropdown menus and responsive charts, users can navigate through the dataset to uncover insights into the microbial communities within each sample. The visualization effort extends to displaying demographic metadata, enriching the context of each dataset explored. Designed with accessibility in mind, the project is hosted on GitHub Pages, inviting users to engage with the data meaningfully and interactively. This endeavor highlights the capabilities of web-based data visualization tools and underscores the potential for a deeper understanding of microbiological ecosystems through data analytics.
## Deployment
Explore the fascinating world of microbial ecosystems with our interactive dashboard: [BioD3: Visualizing Microbial Ecosystems](https://jeremytallant.github.io/belly-button-challenge/).
## Data
The data for this project originates from an intriguing study conducted by Hulcr, J. et al. (2012), titled "A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable." This research unveils the astonishing diversity and predictability of bacterial ecosystems residing in human belly buttons, drawing on samples collected from a wide range of participants. The study, accessible through the Rob Dunn Lab's [website](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/), offers a comprehensive exploration into the microcosm that thrives within our navels, highlighting the complex interplay of factors that determine the composition of these bacterial communities. Our interactive dashboard leverages this rich dataset, enabling users to visualize and understand the bacterial diversity present in different individuals' belly buttons, illustrating the broader implications of microbial biodiversity on human health and ecology.
## Technologies Used
* D3.js for data manipulation and binding to DOM elements. 
* Plotly.js for creating interactive visualizations (bar chart, bubble chart, and gauge chart).
* Bootstrap for responsive design. 
## Features

1. **Horizontal Bar Chart**: Displays the top 10 OTUs found in the individual selected from the dropdown menu. 
	* Values: `sample_values`
	* Labels: `otu_ids`
	* Hovertext: `otu_labels`
<img src="images/barchart.png" alt="Description" style="display: block; margin: 0 auto;"/>

2. **Bubble Chart**: Displays each sample.
	* X values: `otu_ids`
	* Y values: `sample_values`
	* Marker size: `sample_values`
	* Text values: `otu_labels`
![image](images/bubble.png)
3. **Demographic Information Panel**: Shows the selected individual's demographic information as key-value pairs.
![image](images/demographics.png) 
4. **Gauge Chart**: Plots the weekly washing frequency of the individual. 
![image](images/gauge.png) 
## How to Use
* Select a Test Subject ID No. from the dropdown menu to update the visualizations with data specific to that individual.
* Hover over the charts to see additional details about the bacteria cultures and their frequencies. 