import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

function SelectDaysUi(
    { onSelectedOption}: { onSelectedOption: any}
) {
    const [days, setDays] = useState<number>(3); 

  const increase = () => setDays((prev) => prev + 1);
  const decrease = () => setDays((prev) => (prev > 1 ? prev - 1 : 1));
  return (
     <div className="flex flex-col gap-4 items-center p-4 border rounded-lg bg-white shadow-sm mt-2">
      <h3 className="text-lg font-semibold">How many days?</h3>
      <div className="flex items-center gap-4">
        <Button className='text-xl font-bold' variant="outline" onClick={decrease}>
          -
        </Button>
        <span className="text-lg font-bold">{days} days</span>
        <Button className='text-xl font-bold' variant="outline" onClick={increase}>
          +
        </Button>
      </div>

      <Button className="mt-2" onClick={() => onSelectedOption(`${days} days`)}>
        Confirm
      </Button>
    </div>
  )
}

export default SelectDaysUi