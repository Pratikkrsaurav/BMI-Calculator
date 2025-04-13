const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give me a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        

        let catogery = '';
        let color = '';
        if(bmi <18.6){
            catogery = 'Under Weight';
            color = 'orange';
        }
        else if(bmi >= 18.6 && bmi <24.9){
            catogery = 'Normal Range';
            color = 'green';
        }
        else if(bmi >= 24.9){
            catogery = 'Over weight';
            color = 'red';
        }

        results.innerHTML = `<span>${bmi} (${catogery})</span>`;
        results.style.color = color;
    }
});