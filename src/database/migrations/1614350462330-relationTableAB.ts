import {MigrationInterface, QueryRunner} from "typeorm";

export class relationTableAB1614350462330 implements MigrationInterface {
    name = 'relationTableAB1614350462330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tabela_a_tabela_b__tabela_b" ("tabelaAId" integer NOT NULL, "tabelaBId" integer NOT NULL, PRIMARY KEY ("tabelaAId", "tabelaBId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_006ab6fe9d0920004698f09dc0" ON "tabela_a_tabela_b__tabela_b" ("tabelaAId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a84a0bf726e3917761232d6da" ON "tabela_a_tabela_b__tabela_b" ("tabelaBId") `);
        await queryRunner.query(`DROP INDEX "IDX_006ab6fe9d0920004698f09dc0"`);
        await queryRunner.query(`DROP INDEX "IDX_4a84a0bf726e3917761232d6da"`);
        await queryRunner.query(`CREATE TABLE "temporary_tabela_a_tabela_b__tabela_b" ("tabelaAId" integer NOT NULL, "tabelaBId" integer NOT NULL, CONSTRAINT "FK_006ab6fe9d0920004698f09dc01" FOREIGN KEY ("tabelaAId") REFERENCES "Tabela_A" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4a84a0bf726e3917761232d6dad" FOREIGN KEY ("tabelaBId") REFERENCES "Tabela_B" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("tabelaAId", "tabelaBId"))`);
        await queryRunner.query(`INSERT INTO "temporary_tabela_a_tabela_b__tabela_b"("tabelaAId", "tabelaBId") SELECT "tabelaAId", "tabelaBId" FROM "tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`DROP TABLE "tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`ALTER TABLE "temporary_tabela_a_tabela_b__tabela_b" RENAME TO "tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`CREATE INDEX "IDX_006ab6fe9d0920004698f09dc0" ON "tabela_a_tabela_b__tabela_b" ("tabelaAId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a84a0bf726e3917761232d6da" ON "tabela_a_tabela_b__tabela_b" ("tabelaBId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_4a84a0bf726e3917761232d6da"`);
        await queryRunner.query(`DROP INDEX "IDX_006ab6fe9d0920004698f09dc0"`);
        await queryRunner.query(`ALTER TABLE "tabela_a_tabela_b__tabela_b" RENAME TO "temporary_tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`CREATE TABLE "tabela_a_tabela_b__tabela_b" ("tabelaAId" integer NOT NULL, "tabelaBId" integer NOT NULL, PRIMARY KEY ("tabelaAId", "tabelaBId"))`);
        await queryRunner.query(`INSERT INTO "tabela_a_tabela_b__tabela_b"("tabelaAId", "tabelaBId") SELECT "tabelaAId", "tabelaBId" FROM "temporary_tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`DROP TABLE "temporary_tabela_a_tabela_b__tabela_b"`);
        await queryRunner.query(`CREATE INDEX "IDX_4a84a0bf726e3917761232d6da" ON "tabela_a_tabela_b__tabela_b" ("tabelaBId") `);
        await queryRunner.query(`CREATE INDEX "IDX_006ab6fe9d0920004698f09dc0" ON "tabela_a_tabela_b__tabela_b" ("tabelaAId") `);
        await queryRunner.query(`DROP INDEX "IDX_4a84a0bf726e3917761232d6da"`);
        await queryRunner.query(`DROP INDEX "IDX_006ab6fe9d0920004698f09dc0"`);
        await queryRunner.query(`DROP TABLE "tabela_a_tabela_b__tabela_b"`);
    }

}
