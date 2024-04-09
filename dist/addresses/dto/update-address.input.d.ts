import { CreateAddressInput } from './create-address.input';
declare const UpdateAddressInput_base: import("@nestjs/common").Type<Partial<CreateAddressInput>>;
export declare class UpdateAddressInput extends UpdateAddressInput_base {
    id: number;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    zipcode: string;
    city: string;
    state: string;
    addressType: string;
    userId: number;
}
export {};
