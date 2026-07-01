import { describe, test, expect, beforeEach, vi } from 'vitest';
import { capitalize } from '../src/app.js';

describe('capitalize', () => {
    test('debería capitalizar la primera letra', () => {
    expect(capitalize('hola')).toBe('Hola');
    });

    test('debería manejar textos ya capitalizados', () => {
    expect(capitalize('Hola')).toBe('Hola');
  });
  
   test('debería manejar null', () => {
    expect(capitalize(null)).toBe('');
  });
})