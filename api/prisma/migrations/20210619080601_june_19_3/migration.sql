/*
  Warnings:

  - You are about to drop the column `facebookId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User.facebookId_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "facebookId";
