-- CreateTable
CREATE TABLE "Coverage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CoverageByPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "available_limit" INTEGER NOT NULL,
    "share" REAL NOT NULL,
    "valueToAnticipate" REAL NOT NULL,
    "coverageId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "CoverageByPlan_coverageId_fkey" FOREIGN KEY ("coverageId") REFERENCES "Coverage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CoverageByPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
