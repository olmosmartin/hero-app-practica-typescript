import React from "react";
import { heroes } from "../../data/heroes"
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const {values, handleInputChange} = useForm({
        heroe: '',
    })

    const {heroe} = values;

    const onSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("values: ",values)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Forn</h4>
                    <hr />

                    <form onSubmit={onSearch}>
                        <input 
                        type="text"
                        name="heroe"
                        placeholder="Buscar heroe"
                        className="form-control"
                        autoComplete="off"
                        value={heroe}
                        onChange={handleInputChange}
                        />
                        
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Resultados</h4>
                    <hr />
                    {
                        heroesFiltered.map((heroe)=>{
                            return<HeroCard 
                                key = {heroe.id}
                                hero = {heroe}
                            />
                        })
                    }
                </div>
            </div>

        </div>
    )
}
