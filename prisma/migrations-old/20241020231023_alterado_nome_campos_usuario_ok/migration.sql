/*
  Warnings:

  - You are about to drop the column `senha` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `usuarios_password_key` ON `usuarios`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `senha`,
    ADD COLUMN `email` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_email_key` ON `usuarios`(`email`);
