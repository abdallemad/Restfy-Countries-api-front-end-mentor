import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SingleCountrySchema,SingleCountry } from "@/lib/zod-schema";

function useGetSingleCountry({name}:{name:string}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", name],
    queryFn: async () => {
      try {
        const { data } = await axios(
          `https://restcountries.com/v3.1/name/${name}`,
          {
            params: {
              fields:
                "name,tld,capital,region,subregion,languages,population,borders,flags,currencies",
            },
          }
        );
        const parsedDate = SingleCountrySchema.array().parse(data) as SingleCountry[]
        return parsedDate[0];
      } catch (error) {
        console.log(error);
      }
    },
  });
  return {
    data,
    isLoading,
    isError,
  }
}

export default useGetSingleCountry;
