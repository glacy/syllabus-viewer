import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { EditModeProvider, useEditMode } from '../context/EditModeContext';
import { LanguageProvider } from '../context/LanguageContext';
import React from 'react';

// Mock Component wrapper
const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <LanguageProvider>
        <EditModeProvider>
            {children}
        </EditModeProvider>
    </LanguageProvider>
);

describe('EditModeContext', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('should provide default values', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });
        expect(result.current.isEditing).toBe(false);
        expect(result.current.syllabus).toBeDefined();
    });

    it('should toggle edit mode', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });
        act(() => {
            result.current.toggleEditMode();
        });
        expect(result.current.isEditing).toBe(true);
    });

    it('should save updates to localStorage', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });

        act(() => {
            result.current.updateMetadata('title', 'New Title');
        });

        // Check state update
        expect(result.current.syllabus.metadata.title).toBe('New Title');

        // Check localStorage
        const stored = localStorage.getItem('syllabusData');
        expect(stored).toBeDefined();
        if (stored) {
            const parsed = JSON.parse(stored);
            expect(parsed.metadata.title).toBe('New Title');
        }
    });

    it('should reset syllabus to defaults and clear localStorage', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });

        // Make a change first
        act(() => {
            result.current.updateMetadata('title', 'Modified Title');
        });
        expect(localStorage.getItem('syllabusData')).not.toBeNull();

        // Reset
        act(() => {
            result.current.resetSyllabus();
        });

        expect(result.current.syllabus.metadata.title).not.toBe('Modified Title'); // Should revert to default
        expect(localStorage.getItem('syllabusData')).toBeNull();
    });

    it('should add a new week', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });
        const initialCount = result.current.syllabus.weeks.length;

        act(() => {
            result.current.addWeek();
        });

        expect(result.current.syllabus.weeks.length).toBe(initialCount + 1);
    });

    it('should remove a week', () => {
        const { result } = renderHook(() => useEditMode(), { wrapper: Wrapper });
        // Ensure there is at least one week
        if (result.current.syllabus.weeks.length === 0) {
            act(() => result.current.addWeek());
        }

        const initialCount = result.current.syllabus.weeks.length;
        const targetWeek = result.current.syllabus.weeks[0].week;

        act(() => {
            result.current.removeWeek(targetWeek);
        });

        expect(result.current.syllabus.weeks.length).toBe(initialCount - 1);
    });
});
