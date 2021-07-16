/*
  Warnings:

  - Added the required column `asin` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItems" ADD COLUMN     "asin" TEXT NOT NULL;
