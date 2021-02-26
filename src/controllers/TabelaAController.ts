import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { TabelaA } from '../models/TabelaA';


export default {
    async index(request: Request, response: Response) {
        const TabARepository = getRepository(TabelaA);

        const tabelaA = await TabARepository.find();

        return response.json(tabelaA);
    },

    async create(request: Request, response: Response) {
        const {
            nome,

        } = request.body;

        const TabARepository = getRepository(TabelaA);

        const TA = TabARepository.create({
            nome,
        });

        await TabARepository.save(TA);

        return response.json(TA);
    }
};

