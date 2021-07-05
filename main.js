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

const data = d3.tsvParseRows("https://media.githubusercontent.com/media/CornelieFalcon/DataViz/main/flight_edges.tsv?token=AQ2P4OK5ZK4FCJQFHJ5GQILA4LUAS".text(), (d, i) => {
    return {
        ORIG = d[0],
        DEST = d[1],
        origin = d[2],
        Destination = d[3], 
        Passengers = d[4],
        SeatsAvailable = d[5],
        FlightsBTWN = d[6],
        Distance = d[7],
        DateYYYYMM = d[8],
        ORIGPop = d[9],
        DESTPop =d[10]
    };
});
    
    /*
    return Object.assign(
        data.map(d =>({
            
        }))*/
    

//const [dataValues] = d3.values(data);
//const keys = Object.keys(dataValues)

//reduceFn = data => d3.sum(data, d => d[""])

//d3.rollups(data, v => v. )