import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Insurance Risk', () => {
  let app: INestApplication;
  const resourcePath = '/insurance';

  let requestPayload;

  beforeEach(async () => {
    requestPayload = {
      age: 35,
      dependents: 2,
      house: { ownership_status: 'owned' },
      income: 100000,
      marital_status: 'married',
      risk_questions: [0, 1, 0],
      vehicle: { year: 2018 },
    };
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a insurance request with ineligible disability  based on income', async () => {
    requestPayload.income = 0;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(200)
      .then((res) => {
        const { body } = res;
        expect(body).toBeDefined();
        expect(body.auto).toBe('regular');
        expect(body.disability).toBe('ineligible');
        expect(body.home).toBe('economic');
        expect(body.life).toBe('regular');
      });
  });

  it('handles a insurance request with ineligible disability and life based on age', async () => {
    requestPayload.age = 60;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(200)
      .then((res) => {
        const { body } = res;
        expect(body).toBeDefined();
        expect(body.auto).toBe('regular');
        expect(body.disability).toBe('ineligible');
        expect(body.home).toBe('economic');
        expect(body.life).toBe('ineligible');
      });
  });

  it('handles a insurance request with ineligible home', async () => {
    requestPayload.house = {};
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(200)
      .then((res) => {
        const { body } = res;
        expect(body).toBeDefined();
        expect(body.auto).toBe('regular');
        expect(body.disability).toBe('economic');
        expect(body.home).toBe('ineligible');
        expect(body.life).toBe('regular');
      });
  });

  it('handles a insurance request with ineligible auto', async () => {
    requestPayload.vehicle = {};
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(200)
      .then((res) => {
        const { body } = res;
        expect(body).toBeDefined();
        expect(body.auto).toBe('ineligible');
        expect(body.disability).toBe('economic');
        expect(body.home).toBe('economic');
        expect(body.life).toBe('regular');
      });
  });

  it('handles a bad request on risk_questions size', async () => {
    requestPayload.risk_questions.push(1);
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe(
          'risk_questions must contain not more than 3 elements',
        );
      });
  });

  it('handles a bad request on risk_questions size', async () => {
    requestPayload.risk_questions[1] = 3;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe(
          'each value in risk_questions must not be greater than 1',
        );
      });
  });

  it('handles a bad request on negative age', async () => {
    requestPayload.age = -1;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe('age must be a positive number');
      });
  });

  it('handles a bad request on negative dependents', async () => {
    requestPayload.dependents = -1;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe('dependents must be a positive number');
      });
  });

  it('handles a bad request on wrong house ownership_status', async () => {
    requestPayload.house.ownership_status = 'origin';
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe(
          'house.ownership_status must be one of the following values: mortgaged, owned',
        );
      });
  });

  it('handles a bad request on negative income', async () => {
    requestPayload.income = -1;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe('income must not be less than 0');
      });
  });

  it('handles a bad request on wrong marital_status', async () => {
    requestPayload.marital_status = 'origin';
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe(
          'marital_status must be one of the following values: single, married',
        );
      });
  });

  it('handles a bad request on wrong vehicle year', async () => {
    requestPayload.vehicle.year = -1;
    return request(app.getHttpServer())
      .patch(`${resourcePath}/risk`)
      .send(requestPayload)
      .expect(400)
      .then((res) => {
        const { body } = res;
        const [message] = body.message;
        expect(body).toBeDefined();
        expect(message).toBe('vehicle.year must be a positive number');
      });
  });
});
