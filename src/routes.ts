import { Router } from 'express';
import TabARepository from './controllers/TabelaAController';
import TabBRepository from './controllers/TabelaBController'


const router = Router();

router.get('/', () => {
    return console.log('ROTA ACESSADA')
});

router.post('/tabelaa', TabARepository.create)
router.post('/tabelab', TabBRepository.create)


export { router }