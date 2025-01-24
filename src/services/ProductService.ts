import { DraftProductSchema } from "../types"
import { safeParse } from "valibot"

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
            console.log(result.output) // mostrar los datos validados
        }
        else
            throw new Error('Datos no válidos')
    } catch (error) {

    }
}