"use strict"

let ok_Button = document.getElementById('ok_button')

function M(a,b){
    this.a,
    this.b
}

M.prototype.sum = function(){
    //sum() method from class M(a,b)
    return this.a + this.b
}

ok_Button.addEventListener('click', function(){
    //code here...
    let ff = new M(2,3)
    var f = document.getElementById('formula')
    f.innerText = ff.sum //get function
})
