import { ImageObject } from './image.model';

export interface Category {
    id: string;
    nombre: string;
    categoriaImg: ImageObject;
    restauranteID: string;
}