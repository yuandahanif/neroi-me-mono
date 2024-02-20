/*
  Warnings:

  - Added the required column `ip` to the `BlogVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BlogVisit` ADD COLUMN `ip` VARCHAR(191) NOT NULL;
