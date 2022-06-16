function getNumbers(){
   
    return new Promise(function(resolu, rejeter){
      setTimeout(function(){
        console.log('Dans asynchrone');
        const number = [2, 3, 4];
        resolu(number)
    }, 0) 
  
    })
  }

function incrementer(numbers){
   
    return new Promise(function(resolu, rejeter){
      setTimeout(function(){
        console.log('Dans asynchrone');
        resolu(numbers.map(x => x+1));
    }, 0) 
  
    })
  }


  function additionner(numbers){
   
    return new Promise(function(resolu, rejeter){
      setTimeout(function(){
        console.log('Dans asynchrone');
        const res = numbers.reduce(function(acc, currentValue){
            return acc + currentValue;
        }, 0)
        resolu(res)
    }, 0) 
  
    })
  }


  async function asyncCall(){
    console.log('A table');
    const numbers = await getNumbers();
    const incremente = await incrementer(numbers);
    const add = await additionner(incremente);
    console.log('Resultat',add);
  }
  
  asyncCall();