export class Satellite {
    name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name=name;
    this.type=type;
    this.launchDate=launchDate;
    this.orbitType=orbitType;
    this.operational=operational;
}

shouldShowWarning() {
    let showwarning:boolean=false;
    if(this.type=='Space Debris'){
        showwarning=true;
    }
    return showwarning;
 }
}



