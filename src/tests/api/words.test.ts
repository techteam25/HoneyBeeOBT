/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import {expect} from '@jest/globals';
import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/words';

describe('/api/words', () => {
    test('should returna an object with a name', async () => {
        const { req, res } = createMocks({
            method: 'GET'
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(200)
        expect(
            JSON.parse(res._getData())
        ).toHaveProperty('word1');
    });
});