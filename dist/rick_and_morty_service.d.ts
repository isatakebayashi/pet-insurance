import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
export declare class RickAndMortyService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Observable<AxiosResponse<any>>;
}
