/**
 * Área dedicada aos testes de integração:
 * Estes testes visam garantir que serviços fundamentais estão operando.
 * 
 * Metodologia de teste aplicada: "RGR" (Red Green Refactor) 
 */

import request from 'supertest'
import { app } from '../../src/app'

describe('User', () => {
  it('Should integrate with the registration service', async () => {

    const response = await request(app)
    .post('/user')
    .send({
        name: 'smartmei',
        email: 'smartmei@smartmei.com.br',
        
    });

    expect(response.status).toBe(201);
  
  });
  
  it('Should integrate with the book registration service', async () => {

    const response = await request(app)
    .post('/book')
    .send({
      logged_user_id: "6baff2bd-3ea0-4b3b-948f-3f1e059008bb",
      title: "Rota 66",
      pages: "200"
      
    });


    expect(response.status).toBe(201);
  
  });
  
});