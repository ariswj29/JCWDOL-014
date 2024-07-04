-- AlterTable
ALTER TABLE `blogs` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
