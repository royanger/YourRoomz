/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating_total` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItems" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rating_total" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart.userId_unique" ON "Cart"("userId");
