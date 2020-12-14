import './card.styles.css'

export const Card = ({monster: {
    id,
    name,
    email
} = {}}) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name}/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}