import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
   <section className='bg-zinc-100 bg-no-repeat mt-20 bg-right bg-contain ' style={{backgroundImage: `url(${FreshFruits})`}}>
    <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col py-10  max-w-[1400px] mx-auto px-10 '>
         <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
         <div className='max-w-[700px] ' >
            <h3 className='md:text-7xl text-xl text-zinc-800 font-bold mt-2'>First Order Discount</h3>
            <p className='text-zinc-600 mt-6 mb-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase, Fast delivery and quality grarantead.</p>
            <Button  content="Get a Discount"/>
         </div>
    </div>
   </section>
  )
}

export default Discount
