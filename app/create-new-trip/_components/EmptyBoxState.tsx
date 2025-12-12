import { suggesion } from '@/app/_components/Hero'
import React from 'react'

function EmptyBoxState(
    {onSelectOption} : any
) {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'>
            Start Plannig new <strong className='text-primary'>Trip</strong> using AI
        </h2>
        <p className='text-center text-gray-400 mt-2'>
            Discover presonalized travel plan, find the best destinations, and plan your dream vacation with power of AI. Let our smart assistant do the hard work while you enjoy jorney. 
        </p>

        <div className='flex flex-col gap-5 mt-10'>
                        {suggesion.map((suggesion, index) => 
                            <div key={index} 
                            onClick={()=> onSelectOption(suggesion.title)}
                            className='group flex items-center gap-4 rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white'>
                                <span className='text-primary group-hover:text-white'>{suggesion.icon}</span>
                                <h2 className='text-lg text-primary group-hover:text-white'>{suggesion.title}</h2>
                            </div>
                        )}
                    </div>
    </div>
  )
}

export default EmptyBoxState