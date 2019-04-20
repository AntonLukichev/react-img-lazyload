import React from 'react'

const url1 = [
  'https://test.lukichev.pro/photo-1534430480872-3498386e7856?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1496442226666-8d4d0e62e6e9?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1479779978657-f97923f70d04?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1495542779398-9fec7dc7986c?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1523509433743-6f42a58221df?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1529225596519-1262d0bfc242?fm=jpeg&q=90&w=',
  'https://test.lukichev.pro/photo-1549925861-c14d41750718?fm=jpeg&q=90&w=',
]


const ImgLazyload = () => {
  return (
    <div>
      <img
        data-src={`${url1[0]}1000`}
        data-srcSet={`
          ${url1[0]}300 300w,
          ${url1[1]}500 500w,
          ${url1[2]}600 600w,
          ${url1[3]}800 800w,
          ${url1[4]}1000 1000w,
          ${url1[5]}1200 1200w,
          ${url1[6]}1500 1500w,
        `}
        data-sizes='90vw'
        className='lazyload'
        alt=''
      />
    </div>
  )
}

export default ImgLazyload
