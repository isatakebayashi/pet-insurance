import { User } from 'src/users/entities/user.entity';
export declare class Pet {
    id: number;
    type: string;
    name: string;
    breed: string;
    birthDate: Date;
    userId: number;
    user?: User;
}
