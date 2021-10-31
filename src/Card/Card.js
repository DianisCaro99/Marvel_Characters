import './card.css';

export default function Card({id, name, description, modified, url}) {
    return(
        <div className="card">
             <h3 class="card-title">{name}</h3>
             <img className="img__Card" src={url} alt={id}/>
                <div className="card-body">
                    <h4 class="card-text">Description: {description}</h4>
                    <p class="card-text">modified: {modified}</p>
                </div>
        </div>
    );
}
