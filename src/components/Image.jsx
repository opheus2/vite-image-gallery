import React from 'react'

export default function Image({ image }) {
  return (
    <>
      <a href={image.links.html} alt="" target="_blank">
        <img
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </a>
    </>
  )
}
