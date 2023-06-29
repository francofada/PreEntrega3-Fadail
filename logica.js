const carrito = [];
let contenidoProductos = document.getElementById('cartasProd');
let tablacompra = document.getElementById('tablaCarro');

let navbar = document.getElementsByClassName('navBtn');
for (const btn of navbar){
        btn.onmouseout =()=>{
            btn.classList.replace('border-bottom border-warning-subtle','border border-primary-subtle');
        }
        btn.onmouseout =()=>{
            btn.classList.replace('border-bottom border-primary-subtle','border border-warning-subtle');
        }
    }
//DOM
function renderizarProductos(listaProds){
    //Contenedor Vacio
    contenidoProductos.innerHTML='';
    
    //Productos
    for(const prod of listaProds){
        contenidoProductos.innerHTML+=`
            <div class="card col-sm-3">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.titulo}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-warning compra">Comprar</button>
                </div>
            </div>
        `;
    }

    //EVENTO
    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
        boton.addEventListener('click',()=>{
            const prodACarro = productos.find((producto)=>producto.id == boton.id);
            agregarCarrito(prodACarro);
        })
        
        boton.onmouseover = ()=>{
            boton.classList.replace('btn-warning','btn-primary');
        }
        boton.onmouseout = ()=>{
            boton.classList.replace('btn-primary','btn-warning');
        }
    }
    
}
renderizarProductos(productos);



function agregarCarrito(producto){
    carrito.push(producto);
    console.table(carrito);
    tablacompra.innerHTML += `
    <tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.titulo}</td>                        
        <td>$${producto.precio}</td>
    </tr>
    
    `;
    
    let total = carrito.reduce((ac,prod)=> ac + prod.precio,0);
    document.getElementById('totalProd').innerText = `TOTAL $:${total}`;
    document.getElementById('agregado').innerHTML=`$${total}`;
    //trabajar con el storage
    localStorage.setItem('Agregados al Carro',JSON.stringify(carrito));
    localStorage.setItem('Monto total $',JSON.stringify(total));
}

