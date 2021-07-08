-- CreateTable
CREATE TABLE "Recommendations" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "searchKey" TEXT NOT NULL,
    "results" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recommendations" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
