const pactum = require('pactum');
let urlEndpoint = 'http://dummy.restapiexample.com/api/v1/create';

describe('Tests for creating an employee and verifying response', ()=>{

    test('Check if status code is 201', async() =>{

        let createEmployee = {
            "name":"John Doe",
            "salary":"33000",
            "age":"33"
        }

        await pactum.spec()
        .post(urlEndpoint).withJson(createEmployee)
        .expectStatus(200)

    });

    test('Check the response body when creating an employee', async()=>{
        let createEmployee = {
            "name":"John Doe",
            "salary":"33000",
            "age":"33"}

            await pactum.spec()
            .post(urlEndpoint)
            .withJson(createEmployee)
            .expectJsonMatch('data.', {
                "name": "John Doe",
                "salary": "33000",
                "age": "33",
                
            })
    })
})