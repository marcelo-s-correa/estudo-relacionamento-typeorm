import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableB1614349857916 implements MigrationInterface {
    name = 'CreateTableB1614349857916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tabela_B" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_Tabela_A" ("id" number PRIMARY KEY NOT NULL, "nome" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_Tabela_A"("id", "nome") SELECT "id", "nome" FROM "Tabela_A"`);
        await queryRunner.query(`DROP TABLE "Tabela_A"`);
        await queryRunner.query(`ALTER TABLE "temporary_Tabela_A" RENAME TO "Tabela_A"`);
        await queryRunner.query(`CREATE TABLE "temporary_Tabela_A" ("id" number PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_Tabela_A"("id", "nome") SELECT "id", "nome" FROM "Tabela_A"`);
        await queryRunner.query(`DROP TABLE "Tabela_A"`);
        await queryRunner.query(`ALTER TABLE "temporary_Tabela_A" RENAME TO "Tabela_A"`);
        await queryRunner.query(`CREATE TABLE "temporary_Tabela_A" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_Tabela_A"("id", "nome", "createdAt") SELECT "id", "nome", "createdAt" FROM "Tabela_A"`);
        await queryRunner.query(`DROP TABLE "Tabela_A"`);
        await queryRunner.query(`ALTER TABLE "temporary_Tabela_A" RENAME TO "Tabela_A"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tabela_A" RENAME TO "temporary_Tabela_A"`);
        await queryRunner.query(`CREATE TABLE "Tabela_A" ("id" number PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "Tabela_A"("id", "nome", "createdAt") SELECT "id", "nome", "createdAt" FROM "temporary_Tabela_A"`);
        await queryRunner.query(`DROP TABLE "temporary_Tabela_A"`);
        await queryRunner.query(`ALTER TABLE "Tabela_A" RENAME TO "temporary_Tabela_A"`);
        await queryRunner.query(`CREATE TABLE "Tabela_A" ("id" number PRIMARY KEY NOT NULL, "nome" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "Tabela_A"("id", "nome") SELECT "id", "nome" FROM "temporary_Tabela_A"`);
        await queryRunner.query(`DROP TABLE "temporary_Tabela_A"`);
        await queryRunner.query(`ALTER TABLE "Tabela_A" RENAME TO "temporary_Tabela_A"`);
        await queryRunner.query(`CREATE TABLE "Tabela_A" ("id" number PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "Tabela_A"("id", "nome") SELECT "id", "nome" FROM "temporary_Tabela_A"`);
        await queryRunner.query(`DROP TABLE "temporary_Tabela_A"`);
        await queryRunner.query(`DROP TABLE "Tabela_B"`);
    }

}
