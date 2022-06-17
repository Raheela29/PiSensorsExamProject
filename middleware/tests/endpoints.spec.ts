import { routes } from "../src/0_routes/routes";
import request from "supertest";


const api = routes;

describe("Plants, The GET with /id", () => {
    it("GET should get a single plant", async () => {
      
      const result = await request(api).get("/api/plants/3");
      expect(result.body).toEqual({"no":3,"Description":"velocia"});
      expect(result.status).toEqual(200);
    });
});







