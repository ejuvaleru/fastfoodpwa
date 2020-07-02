import { Product } from './product.model';

export interface Order {
    productos: Product[];
    costo_total: number;
    costo_subtotal: number;
    nombre_cliente: string;
    direccion_cliente?: string;
    referencias?: string;
    mesa?: string;
}