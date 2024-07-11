export default class Cl_contador {
    constructor(){
        this.contPersonas=0;
        this.contF=0;
        this.contM=0;
    }
    ProcesarPersonas(p){
        this.contPersonas++;
        if(p.sexo == "F"){
        this.contF++;
        }
        if(p.sexo == "M"){
            this.contM++;
        }
    }
}