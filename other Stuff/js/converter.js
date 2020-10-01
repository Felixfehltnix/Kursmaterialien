"use Strict"

calcModule = {

    dezToDual(num) {
        let binary = ""
        while (num !== 0) {
            if (num % 2 === 0) {
                binary = "0" + binary
            } else {
                binary = "1" + binary
            }
            num = Math.floor(num / 2)
        }
        return binary
    }

}


document.addEventListener("DOMContentLoaded", () => {

    const dez = document.getElementById("dez")
    const btn = document.querySelector("#btn")
    const result = document.querySelector("#result").children[0]

    btn.addEventListener("click", () => {
        number = dez.value

        result.innerText = calcModule.dezToDual(number).toString()

        dez.value= "";

    })

})
