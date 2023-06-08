const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

/* other way
export const getRandomFact = () =>{
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => {
            const { fact } = data
            return fact
        });
}*/

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}



    
