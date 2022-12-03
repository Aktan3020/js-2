let JsObject = {
    brand:"HONDA",
    model:"FIT",
    age:2016,
    owner:"Oleg"
}
 
let prom = new Promise( function (resolve){
   let JSONdata = JSON.stringify(JsObject) ;
    resolve(JSONdata);
})
prom.then(function(JSONd){
    setTimeout(function uu(){
        let newJSdd = JSON.parse(JSONd)
      console.log(newJSdd)
    },2000
    )
},function(){
    console.log("ошибка")
})