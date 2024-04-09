import { Address } from 'src/addresses/entities/address.entity';
import { Pet } from 'src/pets/entities/pet.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    accountId: number;
    addresses: Address[];
    pets: Pet[];
}
