/*
  Warnings:

  - You are about to drop the column `description` on the `Coverage` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coverage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Coverage" ("id", "name") SELECT "id", "name" FROM "Coverage";
DROP TABLE "Coverage";
ALTER TABLE "new_Coverage" RENAME TO "Coverage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
