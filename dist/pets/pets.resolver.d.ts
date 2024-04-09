import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
export declare class PetsResolver {
    private readonly petsService;
    constructor(petsService: PetsService);
    createPet(createPetInput: CreatePetInput): Promise<{
        id: number;
        type: string;
        name: string;
        breed: string;
        birthDate: Date;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        type: string;
        name: string;
        breed: string;
        birthDate: Date;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PetClient<{
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        type: string;
        name: string;
        breed: string;
        birthDate: Date;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updatePet(updatePetInput: UpdatePetInput): string;
    removePet(id: number): string;
}
