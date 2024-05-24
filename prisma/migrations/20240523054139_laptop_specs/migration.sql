/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - Added the required column `processor` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storage` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
ADD COLUMN     "processor" TEXT NOT NULL,
ADD COLUMN     "ram" TEXT NOT NULL,
ADD COLUMN     "storage" TEXT NOT NULL;
