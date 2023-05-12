// EJEMPLO 0

const vResp = new XMLHttpRequest();
console.log(vResp);
vResp.open('GET','https://jsonplaceholder.typicode.com/users');
vResp.send();
console.log(vResp);


vResp.addEventListener("readystatechange",e=>{
    if(vResp.readyState !==4)return;

    if(vResp.status>=200 && vResp.status<300){
        //console.log("Exito, Comunicación establecida");
        console.log(vResp.responseText);
        let vJson = JSON.parse(vResp.responseText);
        //console.log(vJson);
        tableBody_Users.innerHTML = vPintar_Api(vJson);
    }else{console.log('Error.....')}
});



function vPintar_Api(fJson){
    let tableBody= ``;  // alt + 96
    fJson.forEach((user,index) =>{
        //console.log(user);
        tableBody += `<tr><td>${user.id}</td><td>${user.name}</td>
                      <td>${user.username}</td><td>${user.email}</td>
                      <td>${user.website}</td></tr>`;
    });
    return tableBody
}
