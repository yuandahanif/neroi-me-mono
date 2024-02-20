/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `BlogVisit` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `BlogVisit` ADD COLUMN `ip` VARCHAR(191) NOT NULL DEFAULT '127.0.0.1';

-- CreateIndex
CREATE UNIQUE INDEX `BlogVisit_hash_key` ON `BlogVisit`(`hash`);
