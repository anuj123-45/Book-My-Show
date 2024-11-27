import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react'

export default function Payment({isOpen,setIsOpen,price}) {
 
  function close() {
    setIsOpen(false)
  }

  

  return (
    <>
    
    <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
  <div className="fixed inset-0 z-10 w-screen ">
    <div className="flex min-h-full items-center justify-center p-4">
      <DialogPanel
        transition
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl backdrop-blur-none duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
      >
        <DialogTitle as="h3" className="text-base/7 font-medium text-gray-800">
          Please make a payment
        </DialogTitle>
        <p className="mt-2 text-sm/6 text-gray-600">
          Hello! Please click the button below to make a payment.
        </p>
        <div className=" w-full mt-4 ">
          <Button
            className=" w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-50"
            onClick={close}
          >
            Pay ₹{price}
          </Button>
          <Button
            className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            onClick={close}
          >
            Close Payment
          </Button>
        </div>
      </DialogPanel>
    </div>
  </div>
</Dialog>

    </>
  )
}