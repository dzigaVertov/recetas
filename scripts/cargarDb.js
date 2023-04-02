import fs from 'fs/promises';

const jsonDb = await fs.readFile('../db.json', { encoding: 'utf8' });
const archivoJson = await JSON.parse(jsonDb);

// console.log(getCategoria(archivoJson, 'Nombre'));
// console.log(getCategoria(archivoJson, 'Instrucciones'));
// console.log(getCategoria(archivoJson, 'Observaciones'));
// console.log(getCategoria(archivoJson, 'Ingredientes'));
let obmousse = getReceta(archivoJson, 'Mousse de chocolate');
console.log(getCategoria(obmousse, 'Ingredientes'));


// Equivalente al zip de python (no chequea cuál de los arrays es el más largo)
function zip(arrays) {
    return arrays[0].map((_, idx) => {
        return arrays.map(array => array[idx]);
    });
}

function getCategoria(ob, encabezado) {
    if (!encabezado) return ob;

    if (ob.contents) {
        for (const nd of ob.contents) {
            if (nd.properties && nd.properties.title && (nd.properties.title[0] === encabezado)) {
                const raiz = nd.contents[0].contents[0];

                if (encabezado === 'Ingredientes') return getTablaIngredientes(raiz);
                return raiz.contents[0];
            }

            let rec = getCategoria(nd, encabezado);
            if (rec) return rec;
        }
    }
}

function getTablaIngredientes(raiz) {

    let ingredientes = raiz.contents
        .filter(elem => (elem.contents.length > 0))
        .map(elem => elem.contents
            .map(elem2 => elem2.contents[0])[0]);

    let cantidades = raiz.contents
        .filter(elem => (elem.contents.length > 0))
        .map(elem => elem.contents
            .map(elem2 => elem2.contents[0])[1]);

    let pares = zip([ingredientes, cantidades]);
    let ob = {};
    pares.forEach(elem => ob[String(elem[0])] = elem[1]);
    return ob;
}

function getReceta(ob, nombre) {
    for (let nd of ob.contents) {
        if (nd.properties && nd.properties.title && (nd.properties.title[0] === nombre)) {
            return nd;
        }
        if (nd.contents) {
            let rec = getReceta(nd, nombre);
            if (rec) return rec;
        }
    }
}

