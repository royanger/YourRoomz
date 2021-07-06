/*
  Warnings:

  - You are about to drop the column `floorMaterialId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `Flooring` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdAt` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_floorMaterialId_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "rank" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "floorMaterialId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Flooring";

-- CreateTable
CREATE TABLE "RelatedMaterial" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RelatedMaterial" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedMaterial" ADD FOREIGN KEY ("materialId") REFERENCES "FurnitureMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
