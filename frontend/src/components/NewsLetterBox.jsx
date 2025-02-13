import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {

      event.preventDefault();
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscrie now & get 20% off
            
        </p>
        <p className='text-gray-400 mt-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fugiat quisquam maxime suscipit ex dolores totam necessitatibus, dicta, eveniet corporis, consectetur accusamus repellat fuga ea ipsum saepe quod omnis. Quae!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input type="email" placeholder='Enter your email' name="" id=""  className='w-full sm:flex-1 outline-none' required/>
          <button type="submit" className='text-white bg-black text-xs px-10 py-4 '>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsLetterBox
