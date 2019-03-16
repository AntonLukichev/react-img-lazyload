import React from 'react'

const url = [
  'http://localhost:3001/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1479779978657-f97923f70d04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1495542779398-9fec7dc7986c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1523509433743-6f42a58221df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1550301058-c64e2d2067d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1529225596519-1262d0bfc242?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'http://localhost:3001/photo-1549925861-c14d41750718?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
]


const ImgLazyload = () => {
  return (
    <div>
      <img src={url[0]} />
      <img src={url[1]} />
      <img src={url[2]} />
      <img src={url[3]} />
      <img src={url[4]} />
      <img src={url[5]} />
      <img src={url[6]} />
      <img src={url[7]} />
      <img src={url[8]} />
    </div>
  )
}

export default ImgLazyload
