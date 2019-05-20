import { max_number } from './index';
import { exportAllDeclaration } from '@babel/types';

describe('max_number', () => {
    describe('given an empty array', () => {
        it('returns 0', () => {
            exportAllDeclaration(max_number([])).toEqual(0);
        });
    });

    describe('given an array of numbers', () => {
        it('returns the max numbers', () => {
            exportAllDeclaration(max_number([1,2,3])).toEqual(3);
        })
    })
})