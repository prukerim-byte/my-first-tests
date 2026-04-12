import {test, expect} from '@playwright/test';

test.describe("Users API", () => {


    test("GET /users/1 — assert status is 200 and user's name is Leanne Graham", async({request}) => {
        const response = await request.get("/users/1");
        expect(response.status()).toBe(200);

        const body = await response.json();
        await expect(body.name).toBe("Leanne Graham");

    });


    test("POST /users — send new user, assert status 201, response contains id", async({request}) => {
        const response = await request.post("/users", {
            data: {
                "name": "Test User",
                "email": "testuser@example.com",
                "username": "testuser"
            }
        });

        expect(response.status()).toBe(201);

        const body = await response.json();
        await expect(body.id).toBeTruthy();

    });


    test("DELETE /users/1 — assert status is 200", async({request}) => {

        const response = await request.delete("/users/1");
        expect(response.status()).toBe(200);
    });



});