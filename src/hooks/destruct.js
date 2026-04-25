const hola = "1, Papa, 70.0"

const [id, nombre, precio] = hola.split(',')

console.log(typeof(id))
console.log(typeof(nombre))
console.log(typeof(precio))

const precio_final = Number(precio) + 3

function agregarImpuesto(precio) {
    const total = precio + (precio * 0.1)

    return total
}

const precioPapa = agregarImpuesto(Number(precio))

console.log(precioPapa)
