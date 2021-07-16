-- AlterTable
ALTER TABLE "Furniture" ADD COLUMN     "CategoryStyleId" TEXT NOT NULL DEFAULT E'291627c1-efbd-4167-ab09-2ef684a63ac9';

-- AddForeignKey
ALTER TABLE "Furniture" ADD FOREIGN KEY ("CategoryStyleId") REFERENCES "CategoryStyles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
