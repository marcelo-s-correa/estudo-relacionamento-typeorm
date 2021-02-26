import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableA1614348050007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Tabela_A',
                columns: [
                    {
                        name: 'id',
                        type: 'number',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Tabela_A')
    }
}


