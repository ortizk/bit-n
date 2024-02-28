-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `about_me` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `pronouns` VARCHAR(191) NOT NULL,
    `ethnicity` VARCHAR(191) NOT NULL,
    `relationship_status` VARCHAR(191) NOT NULL,
    `looking_for` VARCHAR(191) NOT NULL,
    `hiv_status` VARCHAR(191) NOT NULL,
    `last_tested` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Profile_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
