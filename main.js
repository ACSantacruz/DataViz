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
    const data = d3.tsvParse(await FileAttachment("flight_edges.tsv").text(), d =>({
        ORIG: +d["ORIG"],
        DEST: +d["DEST"],
        Origin: +d["Origin"],
        Destination: +d["Destination"],
        Passengers: +d["Passengers"],
        SeatsAvailable: +d["SeatsAvailable"],
        FlightsBTWN: +d["FlightsBTWN"],
        DistanceMile: +d["DistanceMile"],	
        DateYYYYMM: +d["DateYYYYMM"],
        OriginPop: +d["OriginPop"],
        DestinationPop: +d["DestinationPop"]
    }));
        
}
console.log(data);