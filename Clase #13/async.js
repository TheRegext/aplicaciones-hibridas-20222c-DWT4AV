async function A() {
    console.log("A")
    //throw "Error"
    return 5
}

async function B() {
    console.log("B")
    return 10
}

async function C() {
    console.log("C")

    return B()
}


C()
    .then(function (data) {
        console.log(data)
    })

/*
A()
    .then(function (data) {
        console.log("TODO OK   ", data)
        return data * 2
    })
    .then(function (data) {
        console.log("TODO OK 2 ", data)
        return 55
    })
    .catch(function (data) {
        console.log("TODO MAL", data)
        return 0
    })
    .then(function (data) {
        console.log("DESPUES DEL ERROR", data)
    })
    .finally(function () {
        console.log("TODO TERMINO")
    })

    */
//console.log(A())
//console.log(C())