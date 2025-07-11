import { useState } from "react";
import { useEffect } from "react";

export function RandomUser() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        //faccio qualcosa
        fetch('https://randomuser.me/api/')
        .then((res)=>res.json()) //risultato di tipo json
        .then((data) => setUser(data.results[0])) //questa la struttura dell'API di riferimento prendendo il primo array 
    }
    ,[])
    return (
        <div>
            <h2>Utente Casuale</h2>
            {
                user ? // vogliamo stampare il nome dell'utente preso dal comando fetch
                <>
                <p>{user.name.first}</p> 
                </>
                :
                <p>Caricamento...</p>
            }
        </div>
    );
}