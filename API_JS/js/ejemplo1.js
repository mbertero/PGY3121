// EJEMPLO 1

window.addEventListener("load", function(){ 
    const listUsers=async()=>{
        const vRespuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        //console.log(vRespuesta);
        const users = await vRespuesta.json();
        //console.log(users);
        //tableBody_Users.innerHTML = vPintar_Api(users);
    }
    
    listUsers();
})

/*
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
*/