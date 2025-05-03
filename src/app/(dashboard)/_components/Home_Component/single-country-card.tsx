'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Country } from '@/lib/zod-schema';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SingleCountryCard({ country }: { country: Country }) {
  const searchparams = useSearchParams();
  const region = searchparams.get('region') || '';
  return (
    <li className='relative cursor-pointer hover:shadow-xl transition-all rounded-xl'>
      <Link
        href={`/${country.name.common}${region ? `?region=${region}` : ''}`}
        className='absolute inset-0'
        aria-description='Link to country details'></Link>
      <Card className='pt-0 h-full'>
        <CardHeader className='relative w-full aspect-[3/2] rounded-xl'>
          <Image
            src={country.flags.png}
            alt={country.flags.alt}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover rounded-t-xl'
          />
        </CardHeader>

        <CardContent>
          <CardTitle className='text-lg font-bold'>{country.name.common}</CardTitle>
          <div className='text-sm'>
            <p><span className='font-bold'>Population:</span> <span>{country.population}</span></p>
            <p><span className='font-bold'>Region:</span> <span>{country.region}</span></p>
            <p><span className='font-bold'>Capital:</span> <span>{country.capital}</span></p>
          </div>
        </CardContent>
      </Card>
    </li>
  )
}

export default SingleCountryCard
