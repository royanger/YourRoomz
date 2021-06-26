-- AlterTable
ALTER TABLE "Flooring" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "FurnitureMaterial" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "CategoryStyles" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryStyles" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
