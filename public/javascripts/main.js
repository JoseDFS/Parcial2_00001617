document.forms.formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data={
        nombre: document.querySelector("#nombre").value,
        genero: document.querySelector("#genero").value,
        cantidad: document.querySelector("#cantidad").value,
    }
    console.log(data);
    let url="/delitos";
    fetch(url,{
        method:"POST",
        body: JSON.stringify(data),
        header:{
            "Content-Type" : "application/json"
        }
    }).catch(err=>console.log(err)).then(alert("Insertado exitosamente"));
});

function delitos(){
    let data;
}