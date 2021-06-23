/*
  Warnings:

  - Added the required column `MaterialID` to the `Furniture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Furniture" ADD COLUMN     "MaterialID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FurnitureMaterial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Furniture" ADD FOREIGN KEY ("MaterialID") REFERENCES "FurnitureMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
