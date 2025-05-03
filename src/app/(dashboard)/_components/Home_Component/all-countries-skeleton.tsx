'use client';
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
function AllCountriesSkeleton() {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <li className='relative cursor-pointer hover:shadow-xl transition-all rounded-xl' key={index}>
            <Card className='pt-0 h-full'>
                <Skeleton
                  className='w-full h-full aspect-[3/2] '
                />
              <CardContent>
                <Skeleton className='w-full h-6 mb-4' />
                <div className='space-y-3'>
                  <Skeleton className='w-full h-2'/>
                  <Skeleton className='w-full h-2'/>
                  <Skeleton className='w-full h-2'/>
                </div>
              </CardContent>
            </Card>
          </li>
        ))
      }
    </ul>
  )
}

export default AllCountriesSkeleton
