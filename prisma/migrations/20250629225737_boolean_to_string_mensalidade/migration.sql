-- AlterTable
ALTER TABLE "mensalidades" ALTER COLUMN "visualizar" DROP NOT NULL,
ALTER COLUMN "visualizar" SET DEFAULT 'NÃO',
ALTER COLUMN "visualizar" SET DATA TYPE VARCHAR(3);
