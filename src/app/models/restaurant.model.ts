import { TipoRestaurant } from './tiporestaurant.model';

export interface Restaurant {
    id: string;
    nombre: string;
    rating: number;
    ubicación: string;
    numero_contacto: string;
    horario_apertura: string;
    descripción: string;
    foto_portada: string;
    foto_perfil: string;
    tipo_restaurant: TipoRestaurant;
}