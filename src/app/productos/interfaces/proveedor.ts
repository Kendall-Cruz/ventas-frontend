import { Producto } from "./producto";
export interface Proveedor {

    id : number,
    nombreCompleto : string,
    email : string,
    telefono : string,
    productos : Producto[]
}
