function loadProducts(){
        
        const options = {
            method: "GET"
        };

        const url = 'http://127.0.0.1:5500/assets/data.json';

        const resp = fetch(url)
        .then((response) => {
            /* VALIDACIÓN RESPUESTA RECURSO */
            if (response.ok) {
                console.log("response.text: ", response.text);
                return response.text();
            } else {
                console.log("response.status: ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /* LECTURA DE LA DATA JSON*/
            
            const objJson = JSON.parse(data);
            var targets = '';
            
            for (i = 0; i < objJson.length; i++ ) {
                targets = `${targets}
                    <div class="product-container" style="width: 18rem;">
                                <h3>${objJson[i].nombre}</h3>
                                <img src="${objJson[i].imagen}" class="img-productos card-img-top" alt="${objJson[i].alt}">
                                <div class="card-body">
                                    <p class="card-text">${objJson[i].ingredientes}</p>
                                       <h3>${objJson[i].precio}</h3>
                                        <button class="button-add" onclick="${objJson[i].funcion_atributos}">Agregar</button>
                                </div>
                            </div>
                            `;
                }
            var targetsHTML = document.getElementById("productos");
            
            targetsHTML.innerHTML = targets;    
        })
        .catch((err) => {
            /* CAPTURA DE ERRORES */
            console.error("ERROR: ", err.message);
        });    
}

loadProducts();

$("#checkout").removeClass("d-none");