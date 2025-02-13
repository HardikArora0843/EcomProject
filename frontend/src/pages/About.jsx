import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, porro eos facilis impedit deserunt hic iure dolore vero quo quas eaque. Quidem, labore! Laboriosam molestias pariatur similique. Quisquam, inventore tempore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum doloremque vel minus reprehenderit sed nisi ad dignissimos temporibus unde? Incidunt in error pariatur dolore voluptate, nesciunt aliquid sint nobis.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi labore, aspernatur nobis libero vero earum autem esse dolorum aliquam. Eaque mollitia consectetur iste laborum unde. Aperiam consectetur recusandae nemo eveniet.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus enim culpa sequi esse eos nemo temporibus veniam amet praesentium, vel maiores, unde quasi placeat! Illo praesentium nesciunt dicta reiciendis?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus enim culpa sequi esse eos nemo temporibus veniam amet praesentium, vel maiores, unde quasi placeat! Illo praesentium nesciunt dicta reiciendis?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus enim culpa sequi esse eos nemo temporibus veniam amet praesentium, vel maiores, unde quasi placeat! Illo praesentium nesciunt dicta reiciendis?</p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
