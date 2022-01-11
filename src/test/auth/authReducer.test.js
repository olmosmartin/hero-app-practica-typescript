import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types'

describe('pruebas en authReducer.ts', () => {

    test('debe retornar el estado por defecto', () => {
        const state = authReducer({}, {});
        expect (state).toEqual({})
    })

    test('debe autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                user:'Martin'
            }
        }

        const state = authReducer({logged:true, name:'Juan'}, action);
        expect (state.user).toEqual("Martin")
        expect (state.logged).toBe(true)

    })

    test('debe borrar el name del usuario y poner el logged en false', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({}, action);
        expect (state.user).toBeUndefined()
        expect (state.logged).toBe(false)

    })

})