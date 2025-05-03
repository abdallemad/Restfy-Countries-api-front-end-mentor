import { CountriesArraySchema } from "@/lib/zod-schema";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { getAllCountries } from "@/app/actions/get-all-countries";

function useGetAllCountries() {
  const searchparams = useSearchParams();
  const name = searchparams.get("q") || "";
  const region = searchparams.get("region") || "";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries", `${region || "america"}`, name],
    queryFn: async () => {
      try {
        const  data  = await getAllCountries({ name, region });
        return data
      } catch (error) {
        throw new Error("Error fetching countries");
      }
    },
  });
  return {
    data,
    isLoading,
    isError,
  };
}

export default useGetAllCountries;
