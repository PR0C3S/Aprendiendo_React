import { useState, useEffect }from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

//Custom Hook
export function useCatImage({ fact }){
    const [imageUrl, setImageUrl] = useState();
     // para recupera la imagen una vez cambia el fact
     useEffect(()=>{
        if(!fact) return

        const threeWords = fact.split(' ', 3).join(' ');
       // agregamos el otro fetch ya que uno depende del otro
        fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(data => {
            const { url } = data
            setImageUrl(url)
        })

    },[fact])
    return { imageUrl:`${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}