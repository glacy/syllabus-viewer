import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ExportHtmlButton } from '../components/ExportHtmlButton';
import { ExportExcelButton } from '../components/ExportExcelButton';
import { ExportJsonButton } from '../components/ExportJsonButton';
import { ImportJsonButton } from '../components/ImportJsonButton';
import { EditModeProvider } from '../context/EditModeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';
import * as XLSX from 'xlsx';
import React from 'react';

// Mock XLSX
vi.mock('xlsx', () => ({
    utils: {
        aoa_to_sheet: vi.fn(),
        json_to_sheet: vi.fn(),
        book_new: vi.fn(),
        book_append_sheet: vi.fn(),
    },
    writeFile: vi.fn(),
}));

// Mock URL.createObjectURL and revokeObjectURL
const mockCreateObjectURL = vi.fn();
const mockRevokeObjectURL = vi.fn();
window.URL.createObjectURL = mockCreateObjectURL;
window.URL.revokeObjectURL = mockRevokeObjectURL;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Wrapper for providers
const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <LanguageProvider>
        <ThemeProvider>
            <EditModeProvider>
                {children}
            </EditModeProvider>
        </ThemeProvider>
    </LanguageProvider>
);

describe('Export Buttons', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockCreateObjectURL.mockReturnValue('blob:test-url');
    });

    afterEach(() => {
        cleanup();
    });

    describe('ExportHtmlButton', () => {
        it('should render icon only by default', () => {
            render(<ExportHtmlButton />, { wrapper: Wrapper });
            // Default lang is ES, so title should be "Exportar HTML" (from t.exportHtml)
            expect(screen.getByTitle(/Exportar HTML/i)).toBeTruthy();
            expect(screen.queryByText('Exportar HTML')).toBeNull();
        });

        it('should render label when showLabel is true', () => {
            render(<ExportHtmlButton showLabel={true} />, { wrapper: Wrapper });
            expect(screen.getByText('Exportar HTML')).toBeTruthy();
        });

        it('should trigger HTML download on click', () => {
            render(<ExportHtmlButton />, { wrapper: Wrapper });
            const button = screen.getByTitle(/Exportar HTML/i);
            fireEvent.click(button);

            expect(mockCreateObjectURL).toHaveBeenCalled();
        });
    });

    describe('ExportExcelButton', () => {
        it('should render icon only by default', () => {
            render(<ExportExcelButton />, { wrapper: Wrapper });
            expect(screen.getByTitle(/Exportar Excel/i)).toBeTruthy();
            expect(screen.queryByText('Exportar Excel')).toBeNull();
        });

        it('should render label when showLabel is true', () => {
            render(<ExportExcelButton showLabel={true} />, { wrapper: Wrapper });
            expect(screen.getByText('Exportar Excel')).toBeTruthy();
        });

        it('should call XLSX.writeFile on click', () => {
            render(<ExportExcelButton />, { wrapper: Wrapper });
            const button = screen.getByTitle(/Exportar Excel/i);
            fireEvent.click(button);

            expect(XLSX.writeFile).toHaveBeenCalled();
        });
    });

    describe('ExportJsonButton', () => {
        it('should render icon only by default', () => {
            render(<ExportJsonButton />, { wrapper: Wrapper });
            expect(screen.getByTitle(/Exportar JSON/i)).toBeTruthy();
            expect(screen.queryByText('Exportar JSON')).toBeNull();
        });

        it('should render label when showLabel is true', () => {
            render(<ExportJsonButton showLabel={true} />, { wrapper: Wrapper });
            expect(screen.getByText('Exportar JSON')).toBeTruthy();
        });

        it('should trigger JSON download on click', () => {
            render(<ExportJsonButton />, { wrapper: Wrapper });
            const button = screen.getByTitle(/Exportar JSON/i);
            fireEvent.click(button);

            expect(mockCreateObjectURL).toHaveBeenCalled();
        });
    });

    describe('ImportJsonButton', () => {
        it('should render icon only by default', () => {
            render(<ImportJsonButton />, { wrapper: Wrapper });
            expect(screen.getByTitle(/Importar JSON/i)).toBeTruthy();
            expect(screen.queryByText('Importar JSON')).toBeNull();
        });

        it('should render label when showLabel is true', () => {
            render(<ImportJsonButton showLabel={true} />, { wrapper: Wrapper });
            expect(screen.getByText('Importar JSON')).toBeTruthy();
        });
    });
});
