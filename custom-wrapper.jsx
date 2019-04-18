import React from 'react'

console.log('CustomWrapper module init')

export default function({ children }) {
  console.log('CustomWrapper rendered')
  return (
    <div>
      <h2>Custom Wrapper</h2>
      {children}
    </div>
  )
}
