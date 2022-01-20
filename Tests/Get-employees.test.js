const pactum = require('pactum');
let urlEndpoint = 'http://dummy.restapiexample.com/api/v1/employee/1';

describe('Get a single employee and verify results', () =>{

    test('Check if the status code is 200', async () =>{

        await pactum.spec()
        .get(urlEndpoint)
        .expectStatus(200)
        
    });

    test('Check the content header is application/json', async () =>{
        await pactum.spec()
        .get(urlEndpoint)
        .expectHeaderContains('content-type', 'application/json')
    });

    test('Verify the status in the body is Success', async() =>{
        await pactum.spec()
        .get(urlEndpoint)
        .returns("status:Sucess")
    });

    test('Check if the body contains all necessary details', async()=>{
        await pactum.spec()
        .get(urlEndpoint)
        .expectJsonMatch('data.', {
            "id": 1,
            "employee_name": "Tiger Nixon",
            "employee_salary": 320800,
            "employee_age": "61",
            "profile_image": ""
        })
    })

});