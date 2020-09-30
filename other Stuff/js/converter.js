"use Strict"

calcModule = {
    dezToDual(num){
        let bin = 0
        while (num !== 0) {
            bin = num % 2
            num = num / 2
        }
        return num
    }
}



document.addEventListener("DOMContentLoaded", ()=>{

    const dez = document.getElementById("dez")
    const btn = document.querySelector("#btn")
    const container = document.querySelector("#container")

    btn.addEventListener("click", ()=>{
        number = dez.value

        const newNumber = document.createElement("h6");
        newNumber.innerText = calcModule.dezToDual(number).toString()
        newNumber.style.fontSize = "5rem"
        newNumber.style.margin = "0"
        container.appendChild(newNumber)





    })

    })
