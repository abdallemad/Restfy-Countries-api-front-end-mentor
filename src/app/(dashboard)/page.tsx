'use client'
import CountriesContainer from "./_components/Home_Component/countries-container";
import RegionSelect from "./_components/Home_Component/region-select";
import SearchCountryInput from "./_components/Home_Component/search-country-input";
export default function Home() {

  return (
    <main className="container">
      {/* Filters Options */}
      <form className="flex flex-wrap gap-4 py-20 items-center justify-between">
        <SearchCountryInput />
        <RegionSelect />
      </form>
      {/* Countries container */}
      <CountriesContainer />
    </main>
  );
}
