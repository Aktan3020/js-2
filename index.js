
console.log("Client to request to get data...", "loading started");
let JsObject = {
    brand: "HONDA",
    model: "FIT",
    age: 2016,
    owner: "Oleg"
}
setTimeout(function () {
    let prom = new Promise(function (resolve) {
        let JSONdata = JSON.stringify(JsObject);
        resolve(JSONdata);

    })
    prom.then(function (JSONd) {
        setTimeout(function () {
            console.log("Server send jsObject--" + JsObject);
           
        }, 1000)
        setTimeout(function uu() {
            let newJSdd = JSON.parse(JSONd)
 console.log("Preparing Data");
            console.log(newJSdd)
        }, 2000
        )
    }).catch(function () {
        return console.log("ошибка")
    })
}, 2000)
