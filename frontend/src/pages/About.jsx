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
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="EcomShop team and curated fashion" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            EcomShop is a premium fashion destination built for people who want quality, fit, and style without compromise.
            We curate apparel and accessories from trusted partners, focus on durable fabrics and thoughtful design, and
            bring everything together in one calm, easy shopping experience.
          </p>
          <p>
            Whether you are refreshing your everyday wardrobe or looking for standout pieces for special occasions, we are
            here to help you choose with confidence. Transparent pricing, clear sizing, and honest product detail are at
            the heart of how we work.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is simple: make reliable, stylish fashion accessible to customers across India. We invest in
            quality checks, responsive support, and a seamless journey from browse to delivery—so you spend less time
            worrying and more time enjoying what you wear.
          </p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every product we list is chosen with care: we look at stitching, fabric feel, colour fastness, and how true
            sizes run. If something does not meet our standards, it does not make it to you.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Shop anywhere, on any device. Save your favourites, track orders in one place, and enjoy simple checkout with
            secure payment options. We keep the process short so you can get back to your day.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our support team answers sizing questions, delivery updates, and returns with clarity and speed. We treat every
            order as important—because your trust is what keeps us growing.
          </p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
