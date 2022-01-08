import { heroes } from '../data/heroes'

export const getHeroById = (id:String) => {

        return heroes.find( hero => hero.id === id)
}