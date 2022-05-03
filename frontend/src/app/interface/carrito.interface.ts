import { producto } from "./producto.interface";

export interface carrito{
    id_carrito:     number,
    id_user_buyer:  number,
    product_list:   producto,
    cant_list:      number
}