import { Button } from '@/components/ui/button'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDown, Globe2, Landmark, MapPin, Plane, Send } from 'lucide-react'
import React from 'react'

const suggesion = [
    {
        title: "Create New Trip",
        icon: <Globe2 className='h-5 w-5'/>
    },
    {
        title: "Inspire me where to go",
        icon: <Plane className='h-5 w-5'/>
    },
    {
        title: "Discover Hidden gems",
        icon: <Landmark className='h-5 w-5'/>
    },
    {
        title: "Adventure Destination",
        icon: <MapPin className='h-5 w-5'/>
    },
]

function Hero() {
  return (
    <div className='mt-24 w-full flex justify-center'>
        {/* Contents */}
        <div className='max-w-3xl w-full text-center space-y-6'>
            <h1 className='text-xl md:text-3xl font-bold'>Hey, I'm your personal <span className='text-primary'>Trip planner</span></h1>
            <p className='text-lg'>Tell me wahat you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in second</p>
            {/* Input Box */}
            <div>
                <div className='border rounded-2xl p-4 relative'>
                    <Textarea placeholder='Create a trip Parise from New York'
                    className='w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none'
                    />
                    <Button size={'icon'} className='absolute bottom-6 right-6'>
                    <Send className='h-4 w-4'/>
                </Button>
                </div>
                
            </div>
            {/* Suggesion list */}
            <div className='flex gap-5'>
                {suggesion.map((suggesion, index) => 
                    <div key={index} className='group flex items-center gap-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white'>
                        <span className='text-primary group-hover:text-white'>{suggesion.icon}</span>
                        <h2 className='text-xs text-primary group-hover:text-white'>{suggesion.title}</h2>
                    </div>
                )}
            </div>
            <div className='flex items-center justify-center flex-col'>
                <h2 className='my-7 mt-14 flex gap-2 text-center'>Not Sure where to start? <strong>See how it works</strong> <ArrowDown/></h2>
                {/* Video Section */}
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://www.example.com/dummy-video"
                    thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                    thumbnailAlt="Dummy Video Thumbnail"
                />
            </div>
        </div>
        
        
        
    </div>
  )
}

export default Hero