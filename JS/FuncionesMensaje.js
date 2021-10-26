//MENSAJE
function traerInformacionMensaje(){
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items);
        }
    });
}

function pintarRespuestaMensaje(items){
    let mytable="<table>";
    mytable+="<tr>";
    mytable+="<td> <b> ID </b> </td>";
    mytable+="<td> <b> MESSAGETEXT </b> </td>";
    mytable+="</tr>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].messagetext+"</td>";
        mytable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado3").empty();
    $("#resultado3").append(mytable);
}

function guardarInformacionMensaje(){
    let myData={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#id3").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionMensaje(){
    let myData={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id3").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("se ha Actualizado los datos")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
        traerInformacionMensaje();
        alert("Se ha Eliminado.")
        }
    });
}