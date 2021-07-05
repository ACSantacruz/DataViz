//DATA
/*
Columns:
ORG 
DES 
Origin
Destination
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
const parseDate = d3.utcParse("%Y0%m")

const data = d3.tsvParse("https://media.githubusercontent.com/media/CornelieFalcon/DataViz/main/flight_edges.tsv", (d) => {
    return {
        origin: d.ORIG,
        destination: d.DEST,
        originLong: d.Origin,
        passengers: d.Passengers,
        seats: d.SeatsAvailable,
        flightsBetween: d.FlightsBTWN,
        distance: d.DistanceMile,
        date: parseDate(d.YYYYMM),
        originPop: d.OriginPop,
        destinationPop: d.DestinationPop
    };
});
/*
function data() { //autoType is needed to turn integer columns into integers rather than strings
    //const names = Array.from(d3.group(data, d => +d.ORIG).keys()).sort(d3.ascending);
    const parseDate = d3.utcParse("%Y0%m")
    return d3.tsvParse(dataUrl, ({ORIG, DateYYYYMM}) => ({
        date: parseDate(DateYYYYMM),
        origin: +ORIG
    }))
        //names: names.map(d => new )
}; //somehow I need to figure out how to turn YYYYMM into actual working dates, somehow counting characters or something like that? https://github.com/d3/d3-time-format
     //so like %Y0%m (0 indicates no padding)
*/