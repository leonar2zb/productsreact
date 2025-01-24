import { DraftProductSchema } from "../types"
import { safeParse } from "valibot"
import axios from "axios"

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price //convertir de cadena a número
        })
        if (result.success) {
            //console.log(result.output) // mostrar los datos validados
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }
        else
            throw new Error('Datos no válidos')
    } catch (error) {
        console.log(error)
    }
}