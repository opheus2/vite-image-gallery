import React, { useState, useEffect, useCallback } from 'react'

import './styles/output.css'
import Image from './components/Image.jsx';
import DefaultImages from './components/DefaultImages.jsx';
import { defaultImages } from './lib/images'

function App() {
  const [images, setImages] = useState([])
  const clientId = 'CFV-GN0b4QSP2vtFfXrVfsEfVCn-wJB9laqdyt5jBjQ'
  const baseUrl = 'https://api.unsplash.com/search/photos/'
  const [searchKeyword, setSearchKeyword] = useState('')

  const imgsOnly = []
  defaultImages.results.forEach(image => {
    imgsOnly.push(image.urls.regular)
  })
  
  const handleChange = e => {
    setSearchKeyword(e.target.value)
  }

  const handleKeyPress = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      searchAction()
    }
  }

  const searchAction = async () => {
    if (searchKeyword.length < 1) {
      setImages([])
    } else {
      const searchRes = await fetch(
        `${baseUrl}?query=${searchKeyword}&per_page=12&client_id=${clientId}`
      )
      const searchResult = await searchRes.json()
      if (searchResult.results.length > 0) {
        setImages(searchResult.results)
      }
    }
  }

  return (
    <div>
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y flex flex-col justify-center text-center max-w-6xl mx-auto">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-gray-700 font-extrabold text-3xl">
            Image Searcher
          </h1>
          <div className="mt-3 relative rounded-md shadow-sm flex justify-center items-center">
            <input
              type="text"
              name="search"
              id="search"
              className="text-center h-12 w-full border-b-2  pl-7 pr-12 sm:text-sm  border-gray-700 outline-none"
              placeholder="Search"
              aria-describedby="search-image"
              autoComplete="off"
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6 flex justify-center items-center mx-auto">
          <div className="grid  gap-3">
            {images.length > 0 ? (
              images.map((image, index) => (
                <Image
                  image={image}
                  key={image.id}
                />
              ))
            ) : (
              <DefaultImages />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

      export default App
