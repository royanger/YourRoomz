/*
  Warnings:

  - You are about to drop the column `MaterialID` on the `Furniture` table. All the data in the column will be lost.
  - Added the required column `MaterialId` to the `Furniture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Furniture" DROP CONSTRAINT "Furniture_MaterialID_fkey";

-- AlterTable
ALTER TABLE "Furniture" DROP COLUMN "MaterialID",
ADD COLUMN     "MaterialId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "floorMaterialId" SET DEFAULT E'260c8fd9-d830-4946-9f90-e13c11a9ba77';

-- AddForeignKey
ALTER TABLE "Furniture" ADD FOREIGN KEY ("MaterialId") REFERENCES "FurnitureMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
