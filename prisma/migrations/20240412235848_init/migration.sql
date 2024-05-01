/*
  Warnings:

  - You are about to drop the `CoverageByPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PolicyCoverages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `type` on the `Coverage` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CoverageByPlan";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PolicyCoverages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlanCoverage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planId" INTEGER NOT NULL,
    "coverageId" INTEGER NOT NULL,
    CONSTRAINT "PlanCoverage_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlanCoverage_coverageId_fkey" FOREIGN KEY ("coverageId") REFERENCES "Coverage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Procedure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverageId" INTEGER NOT NULL,
    CONSTRAINT "Procedure_coverageId_fkey" FOREIGN KEY ("coverageId") REFERENCES "Coverage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProcedureByPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "available_limit" INTEGER NOT NULL,
    "share" REAL NOT NULL,
    "valueToAnticipate" REAL NOT NULL,
    "procedureId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "ProcedureByPlan_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "Procedure" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProcedureByPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PolicyProcedure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "policyId" INTEGER NOT NULL,
    "procedureId" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    CONSTRAINT "PolicyProcedure_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PolicyProcedure_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "Procedure" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coverage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Coverage" ("description", "id", "name") SELECT "description", "id", "name" FROM "Coverage";
DROP TABLE "Coverage";
ALTER TABLE "new_Coverage" RENAME TO "Coverage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
