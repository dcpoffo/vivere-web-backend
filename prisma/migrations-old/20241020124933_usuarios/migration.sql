-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(40) NOT NULL,
    `cpf` VARCHAR(15) NOT NULL,
    `crefito` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(50) NOT NULL,
    `profissao` VARCHAR(30) NOT NULL,
    `role` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
