//DATA
/*
Columns:
ORG 
DES 
Origin, ST
Destination, ST
Passengers
SeatsAvailable 
FlightsBTWN 
DistanceMile 
DateYYYYMM 
OriginPop 
DestinationPop
*/

/*Visualization Ideas:
Sankey https://observablehq.com/@d3/sankey-diagram
*/

/*
data = {
    const data = d3.tsvParse(await FileAttachment("flight_edges.tsv").text();
    const columns = data.columns.slice(1);
    return {
        y: "Passengers"
        //trying stuff from https://observablehq.com/@d3/multi-line-chart
    }
}


*/
var dataUrl = "https://media.githubusercontent.com/media/CornelieFalcon/DataViz/main/flight_edges.tsv";

d3.tsvParse(dataUrl, function(d) {

});