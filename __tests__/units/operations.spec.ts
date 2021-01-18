/**
 * Área dedicada aos testes unitários:
 * Neste primeiro momento, daremos prioridade aos testes de integração.
 * Justamente para garantir, que os serviços essenciais da aplicação estão
 * operando conforme esperado. 
 * 
 * Metodologia de teste aplicada: "RGR" (Red - Green - Refactor)
 */

import request from 'supertest'
import { app } from '../../src/app'

describe('User', () => {
  it('Integration with user registration service', async () => {

    const response = await request(app)
    .post('/user')
    .send({
        name: 'smartmei',
        email: 'test@smartmei.com.br',
        
    });

    expect(response.status).toBe(200);
  
  });
  
});