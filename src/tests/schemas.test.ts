import { describe, it, expect } from 'vitest';
import { SyllabusDataSchema, SyllabusEntrySchema } from '../schemas';

describe('SyllabusDataSchema', () => {
    it('should validate valid syllabus data', () => {
        const validData = {
            metadata: {
                code: "SD101",
                title: "Test Course",
                semester: "2024",
                university: "Test Uni",
                description: "Description",
                authors: ["Author"]
            },
            weeks: [
                {
                    week: 1,
                    title: "Intro",
                    subtitle: "W1",
                    content: ["Topic 1"],
                    objectives: ["Obj 1"],
                    activities: "Act 1",
                    evaluation: [],
                    references: []
                }
            ]
        };
        const result = SyllabusDataSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it('should reject invalid metadata', () => {
        const invalidData = {
            metadata: {
                // Missing code
                title: "Test Course"
            },
            weeks: []
        };
        const result = SyllabusDataSchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });
});

describe('SyllabusEntrySchema', () => {
    it('should validate a valid week entry', () => {
        const validWeek = {
            week: 1,
            title: "Week 1",
            subtitle: "Subtitle",
            content: ["Topic"],
            objectives: ["Obj"],
            activities: "Activity",
            evaluation: [{ type: "Formativa", description: "Desc" }],
            references: [{ text: "Ref" }]
        };
        const result = SyllabusEntrySchema.safeParse(validWeek);
        expect(result.success).toBe(true);
    });

    it('should allow optional fields to be empty strings or omitted if schema permits', () => {
        // Based on schema: title and subtitle are optional or literal ""
        const minimalWeek = {
            week: 1,
            title: "",
            subtitle: "",
            content: [],
            objectives: [],
            activities: "",
            evaluation: [],
            references: []
        };
        const result = SyllabusEntrySchema.safeParse(minimalWeek);
        expect(result.success).toBe(true);
    });

    it('should reject if week is not a number', () => {
        const invalidWeek = {
            week: "1", // String instead of number
            content: [],
            objectives: [],
            activities: "",
            evaluation: [],
            references: []
        };
        const result = SyllabusEntrySchema.safeParse(invalidWeek);
        expect(result.success).toBe(false);
    });
});
