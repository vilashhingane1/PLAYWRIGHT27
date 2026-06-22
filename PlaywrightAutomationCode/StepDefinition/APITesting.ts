import { Given, Then } from "@cucumber/cucumber";
import { expect, request } from "@playwright/test";

let Response: any;
//let responsebody : any; 


Given('I send a delete request', async function () {

    const apiRequestContext = await request.newContext();

    Response = await apiRequestContext.delete(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
            }
        }
    );

    console.log(Response.status());
});

Then('The response status code of delete should be {int}',async function (expectedStatusCode: number) {
     expect(Response.status()).toBe(expectedStatusCode);

    
});


Given('I send a delete request', async function () {
    const apiRequestContext = await request.newContext();

    Response = await apiRequestContext.delete(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
            }
        }
    );
});

Then('The response status code of delete should be {int}', async function (expectedStatusCode) {
    expect(Response.status()).toBe(expectedStatusCode);
});



Given('I send a get request', async function () {
    const baseURL = "https://reqres.in/api/users?page=2";

    const apiRequestContext = await request.newContext();

    Response = await apiRequestContext.get(baseURL, {
        headers: {
            'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
        }
    });
});

Then('The response status code of get should be {int}', async function (expectedStatusCode) {
    expect(Response.status()).toBe(expectedStatusCode);

    const responseBody = await Response.json()
    console.log(responseBody)

    // to get the response from json

    console.log(responseBody.data[0].id)
    console.log(responseBody.data[1].email)
    // to verfiy the rescpctive json data
    expect(responseBody.data[1].email).toBe("lindsay.ferguson@reqres.in");
});

Given('I send a post request with body', async function (requestBody) {
    const baseURL = "https://reqres.in/api/users";

    const apiRequestContext = await request.newContext();
    baseURL : baseURL

    Response = await apiRequestContext.post(baseURL, {
        headers: {
            'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
        },
       data: JSON.parse(requestBody)

    //    data: {

    //     "name" : responsebody.data[1].email,
    //     "job" : responsebody.data[0].id


    //    }
      
        
    
    });
});

Then('The response status code of post should be {int}', async function (expectedStatusCode) {
    expect(Response.status()).toBe(expectedStatusCode);
   
});



Given('I send a put request with body', async function (requestBody) {
    const baseURL = "https://reqres.in/api/users/2";

    const apiRequestContext = await request.newContext();
    baseURL : baseURL

    Response = await apiRequestContext.put(baseURL, {
        headers: {
            'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
        },
       data: JSON.parse(requestBody)

    });
});

Then('The response status code of put should be {int}', async function (expectedStatusCode) {
    expect(Response.status()).toBe(expectedStatusCode);

     const responseBody = await Response.json()
     console.log(responseBody)

    expect(responseBody.name).toBe('Ashok')
    expect(responseBody.job).toBe('Technical Engineer')
   
});


Given('I send a patch request with body', async function (requestBody) {
    const baseURL = "https://reqres.in/api/users/2";

    const apiRequestContext = await request.newContext();
    baseURL : baseURL

    Response = await apiRequestContext.patch(baseURL, {
        headers: {
            'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c'
        },
       data: JSON.parse(requestBody)

    });
});

Then('The response status code of patch should be {int}', async function (expectedStatusCode) {
    expect(Response.status()).toBe(expectedStatusCode);

    //  const responseBody = await Response.json()
    //  console.log(responseBody)

    // expect(responseBody.name).toBe('Ashok')
    // expect(responseBody.job).toBe('QA Engineer')
   
});


