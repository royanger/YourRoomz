/*
  Warnings:

  - You are about to drop the column `facebookID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `googleID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitterID` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "facebookID",
DROP COLUMN "googleID",
DROP COLUMN "twitterID",
ADD COLUMN     "facebookId" TEXT,
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "twitterId" TEXT;
