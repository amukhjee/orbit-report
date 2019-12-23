
export class Satellite{
    
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, satelitelaunchDate: string, satelliteorbitType: string, satelliteoperational: boolean){
        this.name=name;
        this.type=type;
        this.launchDate=satelitelaunchDate;
        this.orbitType=satelliteorbitType;
        this.operational=satelliteoperational;
       
         
    }
}
