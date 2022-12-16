let conta = document.getElementById("cont");
let JSONobj = fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    const obj = response.json();
    return obj
})
.then((data)=>{
    // console.log(data);
for(key in data){  
conta.innerHTML += `<div class='block'> <p>UserId:${data[key].userId} </p>  <p>Id:${data[key].id}</p>  <p>Title:${data[key].title}</p> <p>Body:${data[key].body}</p></div> `
}
});