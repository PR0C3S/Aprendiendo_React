import './App.css'
import { Otro } from './components/Otro';
import { useCatFact } from './services/hooks/useCatFact';
import { useCatImage } from "./services/hooks/useCatImage";


export function App(){
    const { fact, refreshCat } = useCatFact();
    const { imageUrl } = useCatImage({ fact });
    const handleClick = async () =>{
        refreshCat();
    }

    return(
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='image'/>}

            <Otro/>
        </main>
    )
}