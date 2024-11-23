/*
  Warnings:

  - You are about to drop the column `email` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[password]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `usuarios_email_key` ON `usuarios`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `email`,
    DROP COLUMN `nome`,
    ADD COLUMN `name` VARCHAR(40) NOT NULL,
    ADD COLUMN `password` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_password_key` ON `usuarios`(`password`);
