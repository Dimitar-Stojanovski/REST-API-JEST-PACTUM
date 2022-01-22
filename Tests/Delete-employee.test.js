const pactum = require('pactum');
let urlEndpoint = 'http://dummy.restapiexample.com/api/v1/delete/1';

describe('Creating Delete Tests', ()=>{

    test('Check if the status code is 200', async()=>{

        await pactum.spec()
        .delete(urlEndpoint)
        .expectStatus(200)
    });

    test('Check the status code is 1000 ms if there is an item', async()=>{

        await pactum.spec()
        .delete(urlEndpoint)
        .expectResponseTime(1000)
        
    });

    test('Verify response data when deleting an item', async()=>{
        await pactum.spec()
        .delete(urlEndpoint)
        .expectJson({
            "data": "1",
            "message": "Successfully! Record has been deleted",
            "status": "success",
        })
    })
})