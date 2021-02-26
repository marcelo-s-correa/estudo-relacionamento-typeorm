import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { TabelaB } from '../models/TabelaB';


export default {
    async index(request: Request, response: Response) {
        const TabBRepository = getRepository(TabelaB);

        const tabelaB = await TabBRepository.find();

        return response.json(tabelaB);
    },

    async create(request: Request, response: Response) {
        const {
            nome,
        } = request.body;

        const TabBRepository = getRepository(TabelaB);

        const TB = TabBRepository.create({
            nome,
        });

        await TabBRepository.save(TB);

        return response.json(TB);
    }
};