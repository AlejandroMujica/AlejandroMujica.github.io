function gestionarFicheroXML(xmlDoc){
	
	alert(xmlDoc.getElementsByTagName('libreria')[0].childNodes[1].firstChild.nodeValue)

    document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(2)').textContent +
                                                               xmlDoc.querySelector('libro:nth-child(3)').textContent +
                                                               xmlDoc.querySelector('libro:nth-child(4)').textContent +"</b>"

    alert(xmlDoc.getElementsByTagName('libreria')[1].childNodes[1].firstChild.nodeValue)

    document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(5)').textContent +
                                                               xmlDoc.querySelector('libro:nth-child(6)').textContent +
                                                               xmlDoc.querySelector('libro:nth-child(7)').textContent +"</b>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
