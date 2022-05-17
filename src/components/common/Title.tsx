import React from 'react'

interface TitleProps{
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <h1 className="text-light text-center py-5">El titulo es {text}</h1>
    </>
  )
}

export default Title