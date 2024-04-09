import { Account } from "@prisma/client";
export declare abstract class AccountsRepository {
    create(name: string): Promise<Account>;
    findAll(): void;
    findOne(id: string): void;
}
