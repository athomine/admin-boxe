package fr.wirth.admin.boxe.controller;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class UserResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
                .contentType(ContentType.JSON)
                .body("{}")
                .when().post("/users/register")
                .then()
                .statusCode(400);
    }

}
