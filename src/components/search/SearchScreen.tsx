import React from "react";
import queryString from 'query-string'
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../heroes/HeroCard";
import { useMemo } from 'react'


export const SearchScreen = () => {
    const history = useHistory();
    const location = useLocation();
    //esta liberia sirve para tomar datos del query facil 
    //podria tener cosas como q=batman&casa=dc&algo=algo y lo tomaria bien
    //le doy a Q un valor por defecto de "" xq sino es undefined
    const { q="" } = queryString.parse(location.search)

    const {values, handleInputChange} = useForm({
        heroe: q,
    })

    const {heroe} = values;

    const heroesFiltered = useMemo(() => {
        if(!Array.isArray(q) && q){
            return getHeroByName(q)
        }
    },[q])
    //const heroesFiltered = getHeroByName(heroe);

    const onSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push("?q="+heroe)
    }
    console.log(q)
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
                        (q==='')&&
                        <div className="alert alert-info">
                            Busca un heroe
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered?.length===0)&&
                        <div className="alert alert-danger">
                            No hay un heroe con {q}
                        </div>
                    }

                    {
                        heroesFiltered?.map((heroe)=>{
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
