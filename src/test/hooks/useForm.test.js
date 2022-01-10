import {renderHook, act} from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"


describe('pruebas en useForm.ts', () => {
    
    const initialForm = {
        name: 'Martín',
        email: 'asdf@asdf.com'
    };

    test('debe retornar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))
        
        expect (result.current.values).toBe(initialForm)
        expect (typeof result.current.handleInputChange).toBe('function')
        expect (typeof result.current.reset).toBe('function')

    })

    test('debe cambiar el valor del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm))
        const { handleInputChange } = result.current
        
        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'juan'
                }
            })
        })
        //si extraigo los values arriba entonces no cambia el valor del formulario
        const { values } = result.current

        expect (values).toEqual({...initialForm, name:"juan"})

    })

    test('debe reestablecer el formulario con reset', () => {

        const { result } = renderHook(() => useForm(initialForm))
        const { handleInputChange, reset } = result.current
        
        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'juan'
                }
            })
            reset();
        })
        //si extraigo los values arriba entonces no cambia el valor del formulario
        const { values } = result.current

        expect (values).toEqual(initialForm)

    })
    
})
