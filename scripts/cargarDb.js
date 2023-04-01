import fs from 'fs/promises';



const jsonDb = await fs.readFile('../db.json', { encoding: 'utf8' });
const archivoJson = await JSON.parse(jsonDb);

let primerNivel = archivoJson.contents[1];

// // Ingredientes table
// console.log(primerNivel.contents[3].properties.title[0]);
// // 100gs
// console.log(primerNivel.contents[3].contents[0].contents[0].contents[4].contents[1].contents[0]);
// // 135gs

// console.log(primerNivel.contents[3].contents[0].contents[0].contents[3].contents[1].contents[0]);
// // 500gs
// console.log(primerNivel.contents[3].contents[0].contents[0].contents[2].contents[1].contents[0]);

// // 100gs
// console.log(primerNivel.contents[3].contents[0].contents[0].contents[4].contents[0].contents[0]);
// // 135gs
// console.log(primerNivel.contents[3].contents[0].contents[0].contents[3].contents[0].contents[0]);
// // 500gs
// console.log(primerNivel.contents[3].contents[0].contents[0].contents[2].contents[0].contents[0]);

// let encabezados = [];
// primerNivel.contents.forEach(elem=>(encabezados.push(elem.properties['raw-value'])));
// encabezados.forEach(elem => {if(elem) console.log(elem);});

// let textos = [];
// primerNivel.contents.forEach(elem=> {
//     if ( elem.contents[0].contents[0]){
//         textos.push(elem.contents[0].contents[0]);
//     } else {
//         elem.contents.forEach(elem => console.log(elem.properties['raw-value']));
//     }


// });


// textos.forEach(elem => {
//     if(elem) {
//         console.log(elem.contents[0]);
//         if (elem.properties.contents){
//             console.log(elem.properties.contents);

//         } else {
//             console.log('no hay');
//         }
//     }
// });

console.log(getCategoria(archivoJson, 'Nombre'));
console.log(getCategoria(archivoJson, 'Instrucciones'));
console.log(getCategoria(archivoJson, 'Observaciones'));

function getCategoria(ob, encabezado) {
    if (!encabezado) return ob;
    if (ob.contents) {
        for (const nd of ob.contents) {
            if (nd.properties && nd.properties.title && (nd.properties.title[0] === encabezado)) {
                return nd.contents[0].contents[0].contents[0];
            }
            let rec = getCategoria(nd, encabezado);
            if(rec) return rec;
        }
    }
}

