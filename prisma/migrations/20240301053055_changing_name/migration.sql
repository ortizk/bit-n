/*
  Warnings:

  - You are about to drop the column `profile_display_name` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `name` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Profile_user_id_key` ON `Profile`;

-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `profile_display_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
