import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

interface Props {
    publisher: string
}

export const HeroList = ({ publisher }:Props) => {
    //esto solo se ejecuta si cambia el publisher para no estár pidiendo toda la lista todo el tiempo
    const heroes = useMemo(() => 
        getHeroesByPublisher (publisher),
    [publisher])

    //const heroes = getHeroesByPublisher (publisher)

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                heroes.map( (hero) => {
                    return <HeroCard key = { hero.id } hero = {hero} />
                })
            }
        </div>
    )
}
