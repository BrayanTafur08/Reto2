//CLIENTE
function traerInformacionCliente(){
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items);
        }
    });
}

function pintarRespuestaCliente(items){
    let mytable="<table>";
    mytable+="<tr>";
    mytable+="<td> <b> ID </b> </td>";
    mytable+="<td> <b> NAME </b> </td>";
    mytable+="<td> <b> EMAIL </b> </td>";
    mytable+="<td> <b> AGE </b> </td>";
    mytable+="</tr>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td>"+items[i].email+"</td>";
        mytable+="<td>"+items[i].age+"</td>";
        mytable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado2").empty();
    $("#resultado2").append(mytable);
}

function guardarInformacionCliente(){
    let myData={
        id:$("#id2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#id2").val("");
            $("#name2").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionCliente(){
    let myData={
        id:$("#id2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id2").val("");
            $("#name2").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("se ha Actualizado los datos")
        }
    });
}

function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
        traerInformacionCliente();
        alert("Se ha Eliminado.")
        }
    });
}