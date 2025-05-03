'use client';
import { Button } from '@/components/ui/button';
import useGetSingleCountry from '@/react-query/hooks/get-single-country';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SingleCountrySkeleton from './single-country-skeleton';
import { useSearchParams } from 'next/navigation';
function SingleCountryPage({ name }: { name: string }) {
  const { data, isLoading, isError } = useGetSingleCountry({ name });
  const searchparams = useSearchParams();
  const region = searchparams.get('region') || '';
  
  return (
    <section className=''>
      <Button className='md:my-12 my-8' asChild>
        <Link href={`/${region ? `?region=${region}` : ''}`}><ArrowLeft className='mr-2' /> Back</Link>
      </Button>
      {isLoading && (
        <SingleCountrySkeleton />
      )}
      {data && (
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <figure className='relative w-full aspect-[3/2]'>
            <Image
              src={data.flags.png}
              alt={data.flags.alt}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
            />
          </figure>
          <figcaption className='pb-4 h-full flex flex-col '>
            <h2 className='text-3xl font-bold mb-8'>{data.name.common}</h2>
            <div className="flex max-md:flex-col gap-2">
              <div className='flex flex-col space-y-2'>
                <CountryDetail keyAttribute={'Native Name'} value={data.name.nativeName?.spa?.official || data.name.official} />
                <CountryDetail keyAttribute={'Population'} value={data.population} />
                <CountryDetail keyAttribute={'Region'} value={data.region} />
                <CountryDetail keyAttribute={'Sub Region'} value={data.subregion} />
                <CountryDetail keyAttribute={'Capital'} value={data.capital.join(', ')} />
              </div>
              <div>
                <CountryDetail keyAttribute={'Top Level Domain'} value={data.tld.join(', ')} />
                <CountryDetail keyAttribute={'Currencies'} value={Object.keys(data.currencies).join(', ')} />
                <CountryDetail keyAttribute={'Languages'} value={Object.values(data.languages).join(', ')} />
              </div>
            </div>
            <div className="h-12 flex gap-4 items-center mt-auto">
              <h3>Border Countries: </h3>
              <ul className='flex flex-wrap gap-2'>
                {data.borders && data.borders.map((border: string) => <li key={border} className='px-4 py-1 bg-gray-200 dark:bg-gray-600 rounded-lg'>{border}</li>)}
              </ul>
            </div>
          </figcaption>
        </div>
      )}
    </section>
  )
}
function CountryDetail({ keyAttribute, value }: { keyAttribute: string, value: string | number }) {
  return (
    <p>
      <span className='font-semibold'>{keyAttribute}</span>
      : <span className='text-gray-600 dark:text-gray-300'>{value}</span>
    </p>
  )
}
export default SingleCountryPage
