import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     marca: 'Toyota',
        //     modelo: 'Corolla'
        // },
    ];

    findAll() {
        return this.cars
    }

    findById( id: string ) {

        const car = this.cars.find( car => car.id === id )

        if( !car ) throw new NotFoundException(`El auto con id '${ id }' no se encontro`);

        return car;
    }

    create( { marca, modelo }: CreateCarDto ) {

        const existCar = this.cars.find( car => car.marca === marca && car.modelo === modelo )

        if( existCar) {
            // throw new Error('Ya existe ese auto')
            throw new ForbiddenException(`El auto ${ marca } ${ modelo } ya existe`)
        }

        const newCar: Car = {
            id: uuid(),
            marca,
            modelo
        }

        this.cars.push( newCar )

        return this.cars
    }

    update( id: string, updateCarDto: UpdateCarDto ){

        let carDB = this.findById(id)

        this.cars = this.cars.map( car => {

            if( car.id === id ){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB
            }

            return car;
        } )

        return carDB;
    }

    delete( id: string ){
        
        const carDB = this.findById(id)

        if( !carDB ) throw new NotFoundException(`El auto con el ID ${id} no existe`)

        this.cars = this.cars.filter( car => car.id !== id )

        return {
            message: `El auto con id ${ id } ha sido borrado`
        }

    }

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }

}