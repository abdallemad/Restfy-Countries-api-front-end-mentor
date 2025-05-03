import { z } from "zod";

const NativeNameSchema = z.object({
  official: z.string(),
  common: z.string(),
});

const NameSchema = z.object({
  common: z.string(),
  official: z.string(),
  nativeName: z.object({
    spa: NativeNameSchema.optional(),  // Marking spa as optional
  }).optional(), // Marking the entire nativeName as optional
});

const FlagsSchema = z.object({
  png: z.string().url(),
  svg: z.string().url(),
  alt: z.string(),
});

const CountrySchema = z.object({
  flags: FlagsSchema,
  name: NameSchema,
  capital: z.array(z.string()),
  region: z.string(),
  population: z.number(),
});
// for single page 
export const SingleCountrySchema = z.object({
  flags: FlagsSchema,
  name: NameSchema,
  tld: z.string().array(),
  capital: z.string().array(),
  region: z.string(),
  subregion: z.string(),
  languages: z.record(z.string(), z.string()),
  borders: z.array(z.string()), 
  population: z.number(),
  currencies: z.record(z.record(z.string(), z.string())),
})
// type for single page
export type SingleCountry = z.infer<typeof SingleCountrySchema>;
// Define the schema for an array of Country objects
export const CountriesArraySchema = z.array(CountrySchema);
// Type inference from the schema
export type Country = z.infer<typeof CountrySchema>;
