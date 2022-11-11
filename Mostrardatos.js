function cargar() {
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        myFunction(this);
    }
    xhttp.open("GET","Videojuegos.xml");
    xhttp.send();
    }
function myFunction(xml){
    const xmlDoc = xml.responseXML;
    const x=xmlDoc.getElementsByTagName("play");
    let table="<tr><th>Titulo</th><th>Desarrollador</th><th>Director</th><th>Plataformas</th><th>Año</th></tr>";
    for(let i=0;i<x.length;i++){
        table+="<tr><td>"+
        x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("desarrollador")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("plataforma1")[0].childNodes[0].nodeValue+"<br>"+
        x[i].getElementsByTagName("plataforma2")[0].childNodes[0].nodeValue+"<br>"+
        x[i].getElementsByTagName("plataforma3")[0].childNodes[0].nodeValue+"<br>"+
        "</td><td>" +
        x[i].getElementsByTagName("anio")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;

}