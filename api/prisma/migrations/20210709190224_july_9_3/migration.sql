/*
  Warnings:

  - You are about to drop the column `roomId` on the `CartItems` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItems" DROP CONSTRAINT "CartItems_roomId_fkey";

-- AlterTable
ALTER TABLE "CartItems" DROP COLUMN "roomId";
