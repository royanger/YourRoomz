/*
  Warnings:

  - You are about to drop the `RecommendedCateogires` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecommendedCateogires" DROP CONSTRAINT "RecommendedCateogires_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "RecommendedCateogires" DROP CONSTRAINT "RecommendedCateogires_roomId_fkey";

-- DropTable
DROP TABLE "RecommendedCateogires";

-- CreateTable
CREATE TABLE "RecommendedCategories" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecommendedCategories" ADD FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedCategories" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
