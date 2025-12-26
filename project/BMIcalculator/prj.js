const form = document.querySelector('form');
console.log("js linked")
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height<=0 || isNaN(height)){
        result.innerHTML = 'please give the valid input ${height}';
    }
     if(weight === '' || weight<=0 || isNaN(weight)){
        result.innerHTML =`please give the valid input ${height}` ;
    }
    else {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
