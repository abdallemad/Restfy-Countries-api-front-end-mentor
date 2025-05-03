import React from 'react'
import SingleCountryPage from '../_components/Single_Country/single-country-details';

async function SinglePageName({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params;

  return (
    <main className='container'>
      <SingleCountryPage name={name} />
    </main>
  )
}

export default SinglePageName
