// import React, { useState } from 'react'
// import {assets} from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false)
//   const [image2,setImage2] = useState(false)
//   const [image3,setImage3] = useState(false)
//   const [image4,setImage4] = useState(false)

//    const [name, setName] = useState("");
//    const [description, setDescription] = useState("");
//    const [price, setPrice] = useState("");
//    const [category, setCategory] = useState("Men");
//    const [subCategory, setSubCategory] = useState("Topwear");
//    const [bestseller, setBestseller] = useState(false);
//    const [sizes, setSizes] = useState([]);

//    const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
      
//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("category",category)
//       formData.append("subCategory",subCategory)
//       formData.append("bestseller",bestseller)
//       formData.append("sizes",JSON.stringify(sizes))

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

//       if (response.data.success) {
//         toast.success(response.data.message)
//         setName('')
//         setDescription('')
//         setImage1(false)
//         setImage2(false)
//         setImage3(false)
//         setImage4(false)
//         setPrice('')
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//    }

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col w-full max-w-3xl mx-auto gap-6 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-xl animate-fadeInUp">

//   {/* Upload Images */}
//   <div className="w-full">
//     <p className="mb-4 text-lg font-semibold text-gray-700">Upload Images</p>
//     <div className="flex gap-4">
//       {[image1, image2, image3, image4].map((img, idx) => (
//         <label key={idx} htmlFor={`image${idx + 1}`} className="relative cursor-pointer group w-20">
//           <img className="w-full h-20 object-cover border-2 border-dashed border-gray-300 rounded-lg group-hover:border-purple-500 transition-all duration-300"
//                src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`Upload ${idx + 1}`} />
//           <input 
//             onChange={(e) => eval(`setImage${idx + 1}`)(e.target.files[0])} 
//             type="file" 
//             id={`image${idx + 1}`} 
//             hidden 
//           />
//         </label>
//       ))}
//     </div>
//   </div>

//   {/* Product Name */}
//   <div className="w-full">
//     <p className="mb-2 text-lg font-semibold text-gray-700">Product Name</p>
//     <input 
//       onChange={(e) => setName(e.target.value)} 
//       value={name} 
//       className="w-full max-w-[500px] px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200" 
//       type="text" 
//       placeholder="Type here" 
//       required 
//     />
//   </div>

//   {/* Product Description */}
//   <div className="w-full">
//     <p className="mb-2 text-lg font-semibold text-gray-700">Product Description</p>
//     <textarea 
//       onChange={(e) => setDescription(e.target.value)} 
//       value={description} 
//       className="w-full max-w-[500px] px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200" 
//       placeholder="Write content here" 
//       required 
//     />
//   </div>

//   {/* Category, Sub-category, and Price */}
//   <div className="flex flex-col sm:flex-row gap-4 w-full">
//     <div className="flex-1">
//       <p className="mb-2 text-lg font-semibold text-gray-700">Product Category</p>
//       <select 
//         onChange={(e) => setCategory(e.target.value)} 
//         className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
//       >
//         <option value="Men">Men</option>
//         <option value="Women">Women</option>
//         <option value="Kids">Kids</option>
//       </select>
//     </div>

//     <div className="flex-1">
//       <p className="mb-2 text-lg font-semibold text-gray-700">Sub Category</p>
//       <select 
//         onChange={(e) => setSubCategory(e.target.value)} 
//         className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
//       >
//         <option value="Topwear">Topwear</option>
//         <option value="Bottomwear">Bottomwear</option>
//         <option value="Winterwear">Winterwear</option>
//       </select>
//     </div>

//     <div className="flex-1">
//       <p className="mb-2 text-lg font-semibold text-gray-700">Product Price</p>
//       <input 
//         onChange={(e) => setPrice(e.target.value)} 
//         value={price} 
//         className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200" 
//         type="number" 
//         placeholder="25" 
//       />
//     </div>
//   </div>

//   {/* Product Sizes */}
//   <div>
//     <p className="mb-2 text-lg font-semibold text-gray-700">Product Sizes</p>
//     <div className="flex gap-3">
//       {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
//         <div 
//           key={size} 
//           onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
//           className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 ${sizes.includes(size) ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-500'}`}
//         >
//           {size}
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Bestseller Checkbox */}
//   <div className="flex items-center gap-2 mt-2">
//     <input 
//       onChange={() => setBestseller(prev => !prev)} 
//       checked={bestseller} 
//       type="checkbox" 
//       id="bestseller" 
//       className="w-5 h-5 accent-purple-500"
//     />
//     <label htmlFor="bestseller" className="cursor-pointer text-lg font-semibold text-gray-700">Add to Bestseller</label>
//   </div>

//   {/* Submit Button */}
//   <button 
//     type="submit" 
//     className="w-full sm:w-32 py-3 mt-4 bg-black text-white rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-all duration-200"
//   >
//     ADD
//   </button>

//   <style jsx>{`
//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
//     .animate-fadeInUp {
//       animation: fadeInUp 0.8s ease-out forwards;
//     }
//   `}</style>

// </form>

//   )
// }

// export default Add



import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className="scrollable-container max-h-[80vh] overflow-y-auto">
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full max-w-3xl mx-auto gap-6 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-xl animate-fadeInUp">
        
        {/* Upload Images */}
        <div className="w-full">
          <p className="mb-4 text-lg font-semibold text-gray-700">Upload Images</p>
          <div className="flex gap-4">
            {[image1, image2, image3, image4].map((img, idx) => (
              <label key={idx} htmlFor={`image${idx + 1}`} className="relative cursor-pointer group w-20">
                <img className="w-full h-20 object-cover border-2 border-dashed border-gray-300 rounded-lg group-hover:border-purple-500 transition-all duration-300"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)} alt={`Upload ${idx + 1}`} />
                <input
                  onChange={(e) => eval(`setImage${idx + 1}`)(e.target.files[0])}
                  type="file"
                  id={`image${idx + 1}`}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="w-full">
          <p className="mb-2 text-lg font-semibold text-gray-700">Product Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-[500px] px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        {/* Product Description */}
        <div className="w-full">
          <p className="mb-2 text-lg font-semibold text-gray-700">Product Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-[500px] px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
            placeholder="Write content here"
            required
          />
        </div>

        {/* Category, Sub-category, and Price */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1">
            <p className="mb-2 text-lg font-semibold text-gray-700">Product Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-2 text-lg font-semibold text-gray-700">Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-2 text-lg font-semibold text-gray-700">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-full px-4 py-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
              type="number"
              placeholder="25"
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div>
          <p className="mb-2 text-lg font-semibold text-gray-700">Product Sizes</p>
          <div className="flex gap-3">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 ${sizes.includes(size) ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-500'}`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller Checkbox */}
        <div className="flex items-center gap-2 mt-2">
          <input
            onChange={() => setBestseller(prev => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
            className="w-5 h-5 accent-purple-500"
          />
          <label htmlFor="bestseller" className="cursor-pointer text-lg font-semibold text-gray-700">Add to Bestseller</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-32 py-3 mt-4 bg-black text-white rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-all duration-200"
        >
          ADD
        </button>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}</style>
      </form>
    </div>
  )
}

export default Add
