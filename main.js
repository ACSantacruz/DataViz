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
function parseFile() {
    const data = d3.tsvParse(await FileAttachment("flight_edges.tsv").text());
        
}