import { z } from 'zod';

export const CourseMetadataSchema = z.object({
    code: z.string(),
    title: z.string(),
    semester: z.string(),
    university: z.string(),
    description: z.string(),
    authors: z.array(z.string())
});

export const EvaluationSchema = z.object({
    type: z.union([z.literal('Formativa'), z.literal('Sumativa'), z.literal('Formative'), z.literal('Summative')]),
    description: z.string()
});

export const ReferenceSchema = z.object({
    text: z.string(),
    pages: z.string().optional()
});

export const SyllabusEntrySchema = z.object({
    week: z.number(),
    title: z.string().optional().or(z.literal("")),
    subtitle: z.string().optional().or(z.literal("")),
    content: z.array(z.string()),
    objectives: z.array(z.string()),
    activities: z.string(),
    evaluation: z.array(EvaluationSchema),
    references: z.union([
        z.string(),
        z.array(ReferenceSchema)
    ])
});

export const SyllabusDataSchema = z.object({
    metadata: CourseMetadataSchema,
    weeks: z.array(SyllabusEntrySchema)
});
