import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
function SingleCountrySkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <Skeleton
        className='w-full aspect-[3/2]'
      />
      <div className='pb-4 h-full flex flex-col '>
        <Skeleton className='h-8 w-full mb-8' />
        <div className="flex flex-col gap-4">
          <div className="flex max-md:flex-col gap-4 mb-8">
            <div className='flex flex-col space-y-3'>
              <Skeleton className='w-[200px] h-4' />
              <Skeleton className='w-[180px] h-4' />
              <Skeleton className='w-[110px] h-4' />
              <Skeleton className='w-[90px] h-4' />
              <Skeleton className='w-[40px] h-4' />
            </div>
            <div className='space-y-3'>
              <Skeleton className='w-[200px] h-4' />
              <Skeleton className='w-[180px] h-4' />
              <Skeleton className='w-[110px] h-4' />
            </div>
          </div>
          <div className="mt-auto gap-4 flex items-center">
            <Skeleton className='w-[100px] h-4' />
            <Skeleton className='w-[20px] h-4' />
            <Skeleton className='w-[20px] h-4' />
            <Skeleton className='w-[20px] h-4' />
            <Skeleton className='w-[20px] h-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCountrySkeleton
