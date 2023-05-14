function val_direccion(){
    const key = 'bc83d7dd9aacbc1b9931d3d51f41e555';
    const city = 'Santiago';
    const country_ISO_3166 = 'cl';
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+','+country_ISO_3166+'&limit=1&appid='+key;
    
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            console.log("response.text: ", response.text);
            return response.text();
        } else {
            console.log("response.status: ", response.status);
            throw new Error(response.status);
        }
    })
    .then((data)=> {
        const dataJson = JSON.parse(data);
        console.log(dataJson.lon);
    })
    .catch((err)=>{
        console.log("ERROR: ",err.message)
    })
}

val_direccion();