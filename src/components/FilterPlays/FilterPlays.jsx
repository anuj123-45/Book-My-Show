import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon , ChevronUpIcon} from '@heroicons/react/20/solid'
import clsx from 'clsx'


const FilterPlays=(props)=> {
  return (
   <>
      <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-3 py-2">
           <span  className={open ? 'text-red-600':'text-gray-700'}> {props.title}</span>
            {open ? <ChevronUpIcon className={clsx('w-5', 'rotate-180')} /> : <ChevronDownIcon className={clsx('w-5', 'rotate-180')} />}
          </DisclosureButton>
          <DisclosurePanel className='text-gray-500'> 
           <div className='flex items-start flex-wrap gap-3'>
           {props.tags.map((tag)=>{
            return <div className='border-2 border-gray-400 p-2'>
            <span className='text-red-600'>{tag}</span>
        </div>
           })}
           </div>
          </DisclosurePanel> 
        </>
      )}
    </Disclosure>
   </>
  )
}


export default FilterPlays