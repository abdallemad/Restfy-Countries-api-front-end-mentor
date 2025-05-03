'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function SelectRegion() {
  const router = useRouter();
  const searchparams = useSearchParams()
  const [localRegion, setRegion] = useState(searchparams.get('region') || 'america');
  return (
    <Select
      value={localRegion}
      onValueChange={(v) => {
        setRegion(v);
        router.push(`/?region=${v}`)
      }} >
      <SelectTrigger className='w-sm'>
        <SelectValue placeholder="Select Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="oceania">Oceania</SelectItem>
        <SelectItem value="america">America</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="africa">Africa</SelectItem>
      </SelectContent>
    </Select>
  )
}
function RegionSelect(){
  return(
    <Suspense fallback={<Skeleton className='w-sm h-8 rounded-lg'/>}>
      <SelectRegion />
    </Suspense>
  )
}

export default RegionSelect
