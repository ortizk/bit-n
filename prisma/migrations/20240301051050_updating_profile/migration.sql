/*
  Warnings:

  - You are about to drop the column `name` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `profile_display_name` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `name`,
    ADD COLUMN `profile_display_name` VARCHAR(191) NOT NULL;
