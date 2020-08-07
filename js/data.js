$(document).ready(
    $.ajax({
        url: 'https://apipetshop.herokuapp.com/api/articulos',
        success: function(data){
                var jugueteFarmacia = data.response
                miPrograma(jugueteFarmacia)
        }
    })
)
    
function miPrograma(jugueteFarmacia){
    var app = new Vue ({
        el: '#app',
        data:{
            juguetes: [],
            farmacia: [],
        }
    })

    jugueteFarmacia.map(toy =>{
      if(toy.tipo == 'Juguete'){
          app.juguetes.push(toy) 
      }else{
          app.farmacia.push(toy)
     }
    }) 

    if(document.querySelector("#info")){  
        const alerta = document.querySelector("#send") 
        const nombres = document.querySelector("#nombre")
        const apellidos = document.querySelector("#apellido")
        const tels = document.querySelector("#tel")
        const mails = document.querySelector("#mail")
        const nombresP = document.querySelector("#nombres")
        const mascotaP = document.querySelector("#perro")
        const mascotaG = document.querySelector("#gato")

        alerta.addEventListener("click",e => {
            e.preventDefault()
            if(nombres.value.length > 2 && apellidos.value.length > 2 && tels.value.length > 2 && mails.value.length > 2 && nombresP.value.length > 2 && (mascotaP.checked ==1 || mascotaG.checked == 1)) {
              swal(`Buen Trabajo ${nombres.value}!`, `Gracias por completar el formulario, Pronto recibiras un mail a ${mails.value}`, "success")
            }else{
              swal("Algunos campos requeridos estan vacios!", "por favor complete el formulario")
            }
        })
    }   
}