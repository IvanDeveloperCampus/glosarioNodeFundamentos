
//INPUT Y OUTPUT

let questions=["Cual es tu nombre", "cuaños años tiene", "Lengiuaje de programacion fav"];

let rta=[];

function pregunta(i) {
    process.stdout.write(questions[i]);
}

function imprimir() {
    console.log(`el nombres es ${rta[0]} tiene ${rta[1]} y le gusta el lenguaje de programacion ${rta[2]}`);
}

process.stdin.on('data', function(data){
    rta.push(data.toString());
    if (rta.length<questions.length) {
        pregunta(rta.length);
    }else{
        imprimir();
        process.exit();
    }
})

pregunta(0);

/*
//imprimir en la terminal un mensaje
process.stdout.write("Dime tu nombre: ");

process.stdin.on('data', function(data){
    process.stdout.write("el nombre escrito es: " + data.toString());
    process.exit();
})*/
