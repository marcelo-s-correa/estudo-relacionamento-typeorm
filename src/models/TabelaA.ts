import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { TabelaB } from "./TabelaB";

@Entity('Tabela_A')
export class TabelaA {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(type => TabelaB)
    @JoinTable()
    tabelaB: TabelaB

}