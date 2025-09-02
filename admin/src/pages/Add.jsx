import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Upload, Image, Crown, Sparkles, Plus, X } from 'lucide-react'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

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
        setSizes([])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeImage = (imageNumber) => {
    switch(imageNumber) {
      case 1: setImage1(false); break;
      case 2: setImage2(false); break;
      case 3: setImage3(false); break;
      case 4: setImage4(false); break;
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-2xl flex items-center justify-center">
            <Plus className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-admin-primary-900">Add New Product</h1>
            <p className="text-admin-primary-600">Create a new premium fashion item</p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmitHandler} className="space-y-8">
        
        {/* Image Upload Section */}
        <div className="admin-card-elevated p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Image className="w-6 h-6 text-admin-accent-600" />
            <h2 className="font-semibold text-xl text-admin-primary-900">Product Images</h2>
            <Sparkles className="w-5 h-5 text-admin-accent-500" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: image1, setImage: setImage1, id: "image1", number: 1 },
              { image: image2, setImage: setImage2, id: "image2", number: 2 },
              { image: image3, setImage: setImage3, id: "image3", number: 3 },
              { image: image4, setImage: setImage4, id: "image4", number: 4 }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <label htmlFor={item.id} className="block cursor-pointer">
                  <div className={`upload-area aspect-square ${item.image ? 'active' : ''}`}>
                    {item.image ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={URL.createObjectURL(item.image)} 
                          alt={`Product ${item.number}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <span className="text-white font-medium">Change Image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <Upload className="w-8 h-8 text-admin-primary-400 mb-2" />
                        <span className="text-sm font-medium text-admin-primary-600">Upload Image {item.number}</span>
                        <span className="text-xs text-admin-primary-400 mt-1">JPG, PNG up to 5MB</span>
                      </div>
                    )}
                  </div>
                  <input
                    onChange={(e) => item.setImage(e.target.files[0])}
                    type="file"
                    id={item.id}
                    hidden
                    accept="image/*"
                  />
                </label>
                
                {item.image && (
                  <button
                    type="button"
                    onClick={() => removeImage(item.number)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-admin-error-500 text-white rounded-full flex items-center justify-center hover:bg-admin-error-600 transition-colors duration-200 shadow-admin-medium"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="admin-card-elevated p-8">
          <h2 className="font-semibold text-xl text-admin-primary-900 mb-6 flex items-center">
            <Crown className="w-6 h-6 text-admin-accent-600 mr-3" />
            Product Details
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Product Name */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                Product Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="admin-input"
                type="text"
                placeholder="Enter premium product name"
                required
              />
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                Product Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="admin-textarea h-32"
                placeholder="Describe the premium features and benefits of this product"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="admin-select"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* Sub Category */}
            <div>
              <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                Sub Category
              </label>
              <select
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
                className="admin-select"
              >
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            {/* Price */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                Price (₹)
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="admin-input"
                type="number"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>
        </div>

        {/* Sizes & Options */}
        <div className="admin-card-elevated p-8">
          <h2 className="font-semibold text-xl text-admin-primary-900 mb-6">Sizes & Options</h2>
          
          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-admin-primary-700 mb-4">
              Available Sizes
            </label>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSizes(prev => 
                    prev.includes(size) 
                      ? prev.filter(item => item !== size) 
                      : [...prev, size]
                  )}
                  className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
                    sizes.includes(size)
                      ? 'border-admin-accent-500 bg-admin-accent-50 text-admin-accent-700 shadow-admin-medium'
                      : 'border-admin-primary-200 bg-white text-admin-primary-700 hover:border-admin-accent-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Bestseller Toggle */}
          <div className="flex items-center space-x-4">
            <input
              onChange={() => setBestseller(prev => !prev)}
              checked={bestseller}
              type="checkbox"
              id="bestseller"
              className="w-5 h-5 text-admin-accent-600 border-2 border-admin-primary-300 rounded focus:ring-admin-accent-500 focus:ring-2"
            />
            <label htmlFor="bestseller" className="flex items-center cursor-pointer">
              <span className="font-semibold text-admin-primary-900 mr-2">Mark as Bestseller</span>
              <Crown className="w-4 h-4 text-admin-accent-600" />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="admin-btn-primary text-lg px-12 py-4 flex items-center space-x-3"
          >
            <Plus className="w-5 h-5" />
            <span>Add Premium Product</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add