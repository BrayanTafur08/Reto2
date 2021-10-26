//CABAÑA
function traerInformacionCabana(){
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabana(respuesta.items);
        }
    });
}

function pintarRespuestaCabana(items){
    let mytable="<table>";
    mytable+="<tr>";
    mytable+="<td> <b> ID </b> </td>";
    mytable+="<td> <b> BRAND </b> </td>";
    mytable+="<td> <b> ROOMS </b> </td>";
    mytable+="<td> <b> CATEGORY_ID </b> </td>";
    mytable+="<td> <b> NAME </b> </td>";
    mytable+="</tr>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].brand+"</td>";
        mytable+="<td>"+items[i].rooms+"</td>";
        mytable+="<td>"+items[i].category_id+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td> <button onclick='borrarElementoCabana("+items[i].id+")'>Borrar</button>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado1").empty();
    $("#resultado1").append(mytable);
}

function guardarInformacionCabana(){
    let myData={
        id:$("#id1").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name1").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#id1").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name1").val("");
            traerInformacionCabana();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionCabana(){
    let myData={
        id:$("#id1").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name1").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#id1").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name1").val("");
            traerInformacionCabana();
            alert("se ha Actualizado los datos")
        }
    });
}

function borrarElementoCabana(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g660a35e6fd6170-gastosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
        traerInformacionCabana();
        alert("Se ha Eliminado.")
        }
    });
}
