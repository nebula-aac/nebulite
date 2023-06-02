import { describe, expect, test } from "bun:test";
import supertest from "supertest";
import { createServer } from "../server";

describe("server", () => {
    test("health check returns 200", async () => {
        await supertest(createServer())
            .get("/healthz")
            .expect(200)
            .then((res) => {
                expect(res.body.ok).toBe(true);
            });
    });

    test("message endpoint says hello", async () => {
        await supertest(createServer())
            .get("/message/jared")
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual({ message: "hello jared" });
            });
    });
});