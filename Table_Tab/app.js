let number = document.getElementById('number');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click', function(){
    result.innerHTML = "";
    for (let i=1; i<11; i++){
        result.innerHTML += number.value + ' x ' + i + ' = ' + (number.value * i) + ' <br/>';
    }
});