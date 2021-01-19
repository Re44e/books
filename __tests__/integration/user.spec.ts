/**
 * Área dedicada aos testes de integração:
 * Estes testes visam garantir que serviços fundamentais estão operando.
 * 
 * Metodologia de teste aplicada: "RGR" (Red Green Refactor) 
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