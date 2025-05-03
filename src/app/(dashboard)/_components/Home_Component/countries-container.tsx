'use client';
import { type Country } from "@/lib/zod-schema";
import useGetAllCountries from "@/react-query/hooks/get-all-countries";
import SingleCountryCard from "./single-country-card";
import AllCountriesSkeleton from "./all-countries-skeleton";
import { Suspense } from "react";

function Container() {
  const { data, isLoading, isError } = useGetAllCountries()
  return (
    <>
      {isError && <li>Error</li>}
      {isLoading && <AllCountriesSkeleton />}
      {
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 pb-8">
          {data?.map((country: Country) => <SingleCountryCard country={country} key={country.name.common} />)}
        </ul>
      }
    </>
  )
}
export function CountriesContainer() {
  return (
    <Suspense fallback={<AllCountriesSkeleton />}>
      <Container />
    </Suspense>
  )
}

export default CountriesContainer
