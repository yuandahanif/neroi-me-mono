/*
  Warnings:

  - You are about to drop the column `url` on the `Media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Media` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Media` DROP COLUMN `url`,
    ADD COLUMN `isNsfw` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `key` VARCHAR(191) NOT NULL,
    ADD COLUMN `visibility` ENUM('PUBLIC', 'PRIVATE') NULL DEFAULT 'PUBLIC';

-- CreateIndex
CREATE UNIQUE INDEX `Media_key_key` ON `Media`(`key`);
