import { HttpService } from "@nestjs/axios";
export declare class RickAndMortyService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<any[]>;
}
