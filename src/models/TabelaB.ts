import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('Tabela_B')
export class TabelaB {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    createdAt: Date;

}