import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class RickAndMortyService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('https://rickandmortyapi.com/api').pipe(
        catchError((error: AxiosError) => {
          throw 'Ops!';
        }),
      ),
    );
    return data;
  }
}