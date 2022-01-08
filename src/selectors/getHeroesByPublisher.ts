import { heroes } from '../data/heroes'


export const getHeroesByPublisher = (publisher:string) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)){
        throw new Error(`Publisher ${publisher} no es correcto`)
    } else {
        return heroes.filter( hero => hero.publisher === publisher)
    }
}