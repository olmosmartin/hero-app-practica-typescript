import { Link } from "react-router-dom"
import { Hero } from "../../models/Hero"

interface props {
    hero:Hero
}

export const HeroCard = ( {hero}: props ) => {
    return (
        <div className="card ms-3" style = {{maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ './assets/heroes/'+hero.id+'.jpg' } className="card-img" alt={hero.superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {hero.superhero} </h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        {
                            hero.alter_ego !== hero.characters && <p className="card-text">{hero.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{hero.first_appearance}</small>
                        </p>
                        
                        <Link to={"./hero/"+hero.id} >
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
