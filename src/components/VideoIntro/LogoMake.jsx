import React from 'react'
import ImgMake from './ImgMake'
import "./Intro.scss";

function LogoMake() {
  return (
    <div className='mt-28'>
    <div className=' p-12 rounded-2xl flex justify-between bg-orange-200'>
        <div className='space-y-10 w-1/2  '>
        <ImgMake/>

            <h2 className='text-5xl font-medium fonttext2   leading-normal '>Make an incredible <br />logo  <em className='text-orange-500'>in seconds</em></h2>
            <p className='text-2xl font-extralight fonttext2'>Pre-designed by top talent. Just add your touch.</p>
            <button className='px-5 text-lg py-3 bg-black text-white rounded-2xl hover:opacity-70 duration-300 font-normal '>Try Fiverr Logo Maker</button>
        </div>
        <div className='custome w-1/2 ml-16  '>
            <img  width={550} src="/img/logo-maker-lohp.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default LogoMake