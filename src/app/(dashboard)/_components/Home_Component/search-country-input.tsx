'use client'

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useDebouncedCallback } from 'use-debounce'
import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

function SearchInput() {
  const searchparams = useSearchParams();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchparams.get('q') || '');
  const debounce = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchparams)
    if (!value) {
      params.delete('q')
    } else {
      params.set('q', value)
    }
    replace(`?${params.toString()}`)
  }, 500)

  return (
    <div className="relative">
      <Search className="absolute size-4 left-3 top-1/2 -translate-y-1/2" />
      <Input
        className="pl-8 w-xs"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          debounce(e.target.value)
        }}
      />
    </div>
  )
}
function SearchCountryInput() {
  return (
    <Suspense fallback={<Skeleton className='w-sm h-8 rounded-lg' />}>
      <SearchInput />
    </Suspense>
  )
}
export default SearchCountryInput
