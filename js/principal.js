import Cl_personas from "./personas.js";
import Cl_contador from "./contador.js";

let persona1= new Cl_personas ("Luis","M");
let persona2= new Cl_personas ("Ana","F");
let persona3= new Cl_personas ("Jose","M");
let persona4= new Cl_personas ("Carmen","F");
let persona5= new Cl_personas ("Rosa","F");
let persona6= new Cl_personas ("Jose","M");
let persona7= new Cl_personas ("Maria","F");
let persona8= new Cl_personas ("Luz","F");
let persona9= new Cl_personas ("Rafael","M");
let persona10= new Cl_personas ("Liz","F");
let persona11= new Cl_personas ("Marcos","M");
let persona12= new Cl_personas ("Leo","M");

let contador= new Cl_contador();

contador.ProcesarPersonas(persona1);
contador.ProcesarPersonas(persona2);
contador.ProcesarPersonas(persona3);
contador.ProcesarPersonas(persona4);
contador.ProcesarPersonas(persona5);
contador.ProcesarPersonas(persona6);
contador.ProcesarPersonas(persona7);
contador.ProcesarPersonas(persona8);
contador.ProcesarPersonas(persona9);
contador.ProcesarPersonas(persona10);
contador.ProcesarPersonas(persona11);
contador.ProcesarPersonas(persona12);

let salida=document.getElementById("salida");
salida.innerHTML= `
Cantidad de Personas ${contador.contPersonas}<br>
Cantidad de Hombres ${contador.contM} <br>
Cantidad de Mujeres ${contador.contF}
`



