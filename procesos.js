//PROCESS => permite obtener informacion sobre el ambiente que esta ejecutado

//process.argv=> imprime donde esta instlado node y la carpeta actual del project
//console.log(process.argv);

function param(p) {
    let index=process.argv.indexOf(p);//buscar la posi dodne esta el p
    return process.argv[index+1];
}

//node procesos --nombre "Ivan" --edad 20
console.log(param('--nombre'));//Ivan


