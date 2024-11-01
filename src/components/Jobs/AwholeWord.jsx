import React from 'react'
import Icon1 from '../icon/Icon1'
import Icon4 from '../icon/Icon4'
import Icon3 from '../icon/Icon3'
import Icon2 from '../icon/Icon2'

function AwholeWord() {
  return (
    <div className='py-8 space-y-8'>
        <div className='text-4xl font-medium'>
        A whole world of freelance <br /> talent at your fingertips
        </div>

        <div className='grid grid-cols-4 gap-8 py-5 '>
            <div className='space-y-5'>
                <Icon1/>
                <h2 className='text-xl font-medium pb-8'>
                Over 700 categories
                </h2>
                <p>Get results from skilled freelancers from <br /> all over the world, for every task, at any <br /> price point.</p>
            </div>
            <div  className='space-y-5'>
                <Icon4/>
                <h2 className='text-xl font-medium pb-8'>Clear, transparent pricing</h2>
                <p>Pay per project or by the hour (Pro). <br /> Payments only get released when you <br /> approve.</p>
            </div>
            <div  className='space-y-5'>
                <Icon3/>
                <h2 className='text-xl font-medium pb-8'>Quality work done faster</h2>
                <p>Filter to find the right freelancers quickly <br /> and get great work delivered in no time, <br /> every time.</p>
            </div>
            <div  className='space-y-5'>
                <Icon2/>
                <h2 className='text-xl font-medium pb-8'>24/7 award-winning support</h2>
                <p>Chat with our team to get your questions <br /> answered or resolve any issues with your <br /> orders.</p>
            </div>
        </div>
    </div>
  )
}

export default AwholeWord