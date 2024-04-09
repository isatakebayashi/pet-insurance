import { RickAndMortyService } from './rickandmorty.service';
export declare class AppController {
    private rickAndMortyService;
    constructor(rickAndMortyService: RickAndMortyService);
    rickAndMort(): Promise<any[]>;
}
