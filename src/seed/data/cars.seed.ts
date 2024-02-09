import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        marca: 'Toyota',
        modelo: 'Corolla'
    },
    {
        id: uuid(),
        marca: 'Volskwagen',
        modelo: 'Vento'
    },
    {
        id: uuid(),
        marca: 'Ford',
        modelo: 'Ranger'
    },
]