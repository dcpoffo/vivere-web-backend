/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[crefito]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuarios` MODIFY `role` VARCHAR(5) NOT NULL DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_cpf_key` ON `usuarios`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_crefito_key` ON `usuarios`(`crefito`);

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_email_key` ON `usuarios`(`email`);
