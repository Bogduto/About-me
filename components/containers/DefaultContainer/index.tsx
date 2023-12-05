"use client"
import React from 'react'

const DefaultContainer = ({children, customStyles}: any) => {
  return (
    <div className={`${customStyles ? customStyles : ""} mobile:px-[20px] tablet:px-0 mobile:w-full tablet:w-[500px] m-auto`}>{children}</div>
  )
}

// mobile:px-[20px] tablet:px-[0]

export default DefaultContainer