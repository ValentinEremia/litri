var km = document.querySelector('#km');
var litri = document.querySelector('#litri');
var butonCalc = document.querySelector('#calculateBtn');

var consumFinal = document.querySelector('#consumFinal');

butonCalc.addEventListener('click', function(){
   
    if(litri.value == '' || km.value == '') {
        alert('Pentru a calcula, trebuie sa completezi toate campurile!')
    }

    var rezultat = (100 * litri.value) / km.value;
    
    consumFinal.innerHTML = rezultat.toFixed(1);
    
});