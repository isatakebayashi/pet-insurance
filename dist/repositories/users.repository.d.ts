export declare abstract class UsersRepository {
    findAll(): void;
    findOne(id: string): void;
    update(id: string, name: string, email: string, password: string): Promise<void>;
}
