-- CreateTable
CREATE TABLE "PolicyCoverages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "policyId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "coverageId" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    CONSTRAINT "PolicyCoverages_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PolicyCoverages_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PolicyCoverages_coverageId_fkey" FOREIGN KEY ("coverageId") REFERENCES "Coverage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
