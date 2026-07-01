import { describe, test, expect } from 'vitest';
import { esMensajeValido, formatearNombre, escaparHTML } from '../src/utils.js';

describe('Pruebas de utilidades del Chat', () => {
    test('esMensajeValido() debería rechazar strings vacíos o solo espacios', () => {
        expect(esMensajeValido('   ')).toBe(false);
        expect(esMensajeValido('')).toBe(false);
        expect(esMensajeValido('Hola Spidey')).toBe(true);
    });

    test('formatearNombre() debería retornar el formato correcto de los roles', () => {
        expect(formatearNombre('user')).toBe('Tú');
        expect(formatearNombre('model')).toBe('Spider-Man');
    });

    test('escaparHTML() debería rechazar etiquetas HTML potencialmente peligrosas', () => {
        const scriptInvalido = '<script>alert("XSS")</script>';
        const resultado = escaparHTML(scriptInvalido);
        expect(resultado).not.toContain('<script>');
        expect(resultado).toContain('&lt;script&gt;');
    })
});