let prodcuts = [];
let prices = [];
let producto = [];
let total = 0;
let cant = 1;

let cant_clicks = 0;

function add(product, price) {
    let prod_exist = false;
    
    for (let i = 0; i < prodcuts.length; i++) {

      if (prodcuts[i][0] == product) {
        console.log("hola2");
        prodcuts[i][1] += 1;
        prodcuts[i][2] += price;
        prod_exist = true;
      }
    }
    
    if (prod_exist == false) {
      console.log("no hay producto existentes");
      prodcuts.push([product,cant,price]);
    }
    
    total = total + price;
    
    
    document.getElementById("checkout").innerHTML=`<span class="mx-3 fs-4">
    <i class="bi bi-cart3"></i>Pagar $${total}</span>`;
}

function debito_credito_form (){
  document.getElementById("checkout").innerHTML=`<div>hola</div><br>`;
}


function eliminar_producto(nombre) {
    for(let i = 0; i < prodcuts.length; i++){
        if(prodcuts[i][0] === nombre){
          if(prodcuts[i][1] > 0){
            var precio = prodcuts[i][2] / prodcuts[i][1]; 
            total -= precio;
            prodcuts[i][2] -= precio;
            prodcuts[i][1] -= 1;
          }else if(prodcuts[i][1]=== 0){
            $(document).ready(function(){
              prodcuts.splice(i,1);
              $(`#file-${nombre}`).remove();

            });
          }
        }
    }
    document.getElementById("checkout").innerHTML=`<span class="mx-3 fs-4">
    <i class="bi bi-cart3"></i>Pagar $${total}</span>`;
}

function listar_productos(){
  let list_productos=``;

  for (let i = 0; i<prodcuts.length; i++) {
    list_productos += `
    <tr id="file-${prodcuts[i][0]}">
    <td>${prodcuts[i][0]}</td>
    <td>${prodcuts[i][1]}</td>
    <td>$${prodcuts[i][2]}</td>
    <td><button id="quitar-${prodcuts[i][0]}" type="button" class="btn btn-danger" onclick="eliminar_producto('${prodcuts[i][0]}'),ver_carrito()">QUITAR</button></td>
    </tr>
    `;
  }
  return list_productos;
}




function ver_carrito(){
  let list_productos = listar_productos();
  document.getElementById("carrito").innerHTML=`
          <table id="tabla" class="table">
          <thead>
          <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Monto Precio</th>
          </tr>
          </thead>
          <tbody>${list_productos}
          <tr>
          <td></td>
          <td></td>
          <td><b>Total precio: </b>$${total}</td>
          </tr>
          </tbody>
          </table>`;
}

  

//function pay(){
    
    //window.alert(prodcuts.join(", \n"));
//}



//MODAL
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



