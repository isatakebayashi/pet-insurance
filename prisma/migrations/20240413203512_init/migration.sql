/*
  Warnings:

  - You are about to drop the column `available_limit` on the `ProcedureByPlan` table. All the data in the column will be lost.
  - Added the required column `availableLimit` to the `ProcedureByPlan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProcedureByPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "availableLimit" INTEGER NOT NULL,
    "share" REAL NOT NULL,
    "valueToAnticipate" REAL NOT NULL,
    "procedureId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "ProcedureByPlan_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "Procedure" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProcedureByPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProcedureByPlan" ("id", "planId", "procedureId", "share", "valueToAnticipate") SELECT "id", "planId", "procedureId", "share", "valueToAnticipate" FROM "ProcedureByPlan";
DROP TABLE "ProcedureByPlan";
ALTER TABLE "new_ProcedureByPlan" RENAME TO "ProcedureByPlan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
