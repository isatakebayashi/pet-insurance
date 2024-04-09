import { CreateBananaInput } from './dto/create-banana.input';
import { UpdateBananaInput } from './dto/update-banana.input';
export declare class BananasService {
    create(createBananaInput: CreateBananaInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBananaInput: UpdateBananaInput): string;
    remove(id: number): string;
}
