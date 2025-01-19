/*
  Warnings:

  - You are about to drop the column `userId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `CarId` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Collection` table. All the data in the column will be lost.
  - Added the required column `CollectionId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "userId",
ADD COLUMN     "CollectionId" INTEGER NOT NULL,
ADD COLUMN     "sku" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "CarId",
DROP COLUMN "description";

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_CollectionId_fkey" FOREIGN KEY ("CollectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
