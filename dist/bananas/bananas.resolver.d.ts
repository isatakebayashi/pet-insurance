import { BananasService } from './bananas.service';
import { CreateBananaInput } from './dto/create-banana.input';
import { UpdateBananaInput } from './dto/update-banana.input';
export declare class BananasResolver {
    private readonly bananasService;
    constructor(bananasService: BananasService);
    createBanana(createBananaInput: CreateBananaInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateBanana(updateBananaInput: UpdateBananaInput): string;
    removeBanana(id: number): string;
}
