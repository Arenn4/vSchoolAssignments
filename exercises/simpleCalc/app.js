// var myAdd = document.myform.myAdd.numSum1.numSum2
// console.log(myForm.numSum1.value + " " + myForm.numSum2.value)

// var mySubtract = document.myform.mySubtract.numSub1.nuMSub2
// console.log(myForm.numSub1.value + " " + myForm.numSum2.value)

// var myMultiply = document.myForm.mySubtract.numMult1.numMult2
// console.log(myForm.numMult1.value + " " + myForm.numMult2.value)

document.myAdd.btnAdd.addEventListener("click", function numAdd(event){
    event.preventDefault()
    var num1 = document.getElementById('numAdd1').value
    var num2 = document.getElementById('numAdd2').value
    var sum = (Number(num1) + Number(num2))
    document.getElementById("add").innerHTML = (`${num1}  +  ${num2}  =   ${sum} "\n Dats quick Mafs"`)
})

document.mySubtract.btnSubtract.addEventListener("click", function numSub(event){
    event.preventDefault()
    var num1 = document.getElementById('numSub1').value
    var num2 = document.getElementById('numSub2').value
    var sub = (Number(num1) - Number(num2))
    document.getElementById("sub").innerHTML = (`${num1}  -  ${num2}  =   ${sub} "\n Dats quick Mafs"`)
})

document.myMultiply.btnMulti.addEventListener("click", function numMult(event){
    event.preventDefault()
    var num1 = document.getElementById('numMult1').value
    var num2 = document.getElementById('numMult2').value
    var mult = (Number(num1) * Number(num2))
    document.getElementById("mult").innerHTML = (`${num1}  *  ${num2}  =  ${mult} "\n Dats quick Mafs"`)

})
//move outputs in each div to reformat and style