import z from 'zod'

const envSchema = z.object({
  POSTGRES_DATABASE_PORT: z.string().transform(Number),
  POSTGRES_DATABASE_USER: z.string(),
  POSTGRES_DATABASE_PASSWORD: z.string(),
  POSTGRES_DATABASE_NAME: z.string(),
  POSTGRES_DATABASE_HOST: z.string(),
})

export const env = envSchema.parse(process.env)
