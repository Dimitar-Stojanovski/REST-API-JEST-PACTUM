const pactum = require('pactum');
let urlEndpoint = 'http://dummy.restapiexample.com/api/v1/update/21';

describe('Tests for updating employee information', ()=>{

    test('Check if the status code is 200 for PUT request', async()=>{

        let updateEmployee = {
            "name":"John Smith",
            "salary":"315000",
            "age":"23"
        }

        await pactum.spec()
        .put(urlEndpoint).withJson(updateEmployee)
        .expectStatus(200)

    });

    test('Check the response body when updating an employee', async()=>{
        let updateEmployee = {
            "name":"John Smith",
            "salary":"315000",
            "age":"23"
        }

        await pactum.spec()
        .put(urlEndpoint)
        .withJson(updateEmployee)
        .expectJsonMatch('data', {
            "name":"John Smith",
            "salary":"315000",
            "age":"23"
        })
    })

})