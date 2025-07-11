export function WelcomeMessage({message, title}){
    return (
        <> {/* react fragment usato al posto del classico tag HTML 'div' */}
        {
            title ?  
            <h1>{message || 'default'}</h1>
            :
            <p>{message || 'default'}</p>
        }
        </>
    )
}