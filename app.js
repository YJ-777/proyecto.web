const carrito = [];

const servicios = [
    {
        id: 1,
        nombre: 'Venta de productos',
        descripcion: 'Descubre lo último en innovación y diseño con nuestra selección de productos tecnológicos. En nuestra tienda, encontrarás una amplia gama dispositivos que transformarán tu experiencia digital y mejorarán tu vida cotidiana',
        imagen: 'assets/img/tecnologico.jpg'
    },
    {
        id: 2,
        nombre: 'Servicio Técnico y Reparaciones',
        descripcion: 'En nuestra tienda, te ofrecemos un servicio técnico experto para mantenerlos en óptimas condiciones tus equipos. Sabemos lo crucial que es para ti contar con dispositivos confiables y funcionando perfectamente y estamos aquí para asegurarnos de que así sea.',
        imagen: 'assets/img/soporte.jpg'
    },
    {
        id: 3,
        nombre: 'Compra de productos',
        descripcion: '¿Tienes dispositivos electrónicos o repuestos que ya no utilizas? ¡No los dejes en el olvido! En nuestra tienda, te ofrecemos una opción conveniente y responsable para vender tus productos tecnológicos y repuestos. Transforma esos artículos en dinero y contribuye a un ciclo de reutilización sostenible.',
        imagen: 'assets/img/compratec.jpg'
    }
]

console.log(servicios);

const servicioElement = document.getElementById('servicios-container');

servicios.forEach((servicio) => {
    console.log('servicio desde for each', servicio);

    const cardElement = `
    <div class="card">
        <div class="card-img">
            <img src="${servicio.imagen}" alt="">
        </div>
        <div class="card-body">
            <h4 class="text-center">${servicio.nombre}</h4>
            <div class="mt-1">
                <p> <strong> Descripcion:</strong> ${servicio.descripcion}</p>            </div>
        </div>
    </div>
    `;
    servicioElement.innerHTML += cardElement;

})

function Solicitar(idservicio) {
    console.log('Solicitar', idservicio);

    const servicio = servicios.find((servicio) => servicio.id === idservicio);
    console.log('servicio encontrado', servicio);


    carrito.push(servicio);
    console.log('carrito', carrito);

    const btnWssp = document.getElementById('wssp');
    btnWssp.classList.remove('d-none');

}


const btnWssp = document.getElementById('wssp');
btnWssp.addEventListener('click', () => {
    console.log('click en wssp');

    let mensaje = 'Hola, quisiera obtener más información sobre este(os) servicio(s):\n';

    carrito.forEach((servicio) => {
        mensaje += `💧*${servicio.nombre}*\n`;
    });

    const url = `https://api.whatsapp.com/send?phone=51993712770&text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});


