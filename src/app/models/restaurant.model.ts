import { TipoRestaurant } from './tiporestaurant.model';
import { ImageObject } from './image.model';

export interface Restaurant {
    id: string;
    nombre: string;
    rating: number;
    ubicacion: string;
    numero_contacto: string;
    horario_apertura: string;
    descripcion: string;
    foto_portada: ImageObject;
    foto_perfil: ImageObject;
    tipo_restaurant: TipoRestaurant;
}