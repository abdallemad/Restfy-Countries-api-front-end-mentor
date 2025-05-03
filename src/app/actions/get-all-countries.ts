"use server";
import { CountriesArraySchema } from "@/lib/zod-schema";
import axios from "axios";

export async function getAllCountries({
  name,
  region,
}: {
  name: string;
  region: string;
}) {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/region/${region || "america"}`,
    {
      params: {
        fields: "name,population,region,capital,flags",
      },
    }
  );
  const parsedDate = CountriesArraySchema.parse(data);
  if(name){
    return parsedDate.filter((country) => country.name.common.toLowerCase().includes(name.toLowerCase()));
  }
  return parsedDate;
}
