import React from 'react'
import Link from 'next/link'

const ExpiredReview = () => {
  return (
    <div className='w-screen h-screen flex-col space-y-4 flex items-center justify-center'>

        <p>Review period has expired!🕺 </p>
        <Link className='px-6 py-3 rounded-md text-white bg-primary' href="https://api.whatsapp.com/send?phone=254706338454">
            Contact developer
        </Link>
        
        
        </div>
  )
}

export default ExpiredReview