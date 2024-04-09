export declare class CreateUserInput {
    name: string;
    email: string;
    password: string;
    accountId: number;
    pets?: CreateUserPetInput[];
}
export declare class CreateUserPetInput {
    type: string;
    name: string;
    breed: string;
    birthDate: Date;
}
