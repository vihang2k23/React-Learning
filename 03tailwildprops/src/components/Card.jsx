import React from 'react'

export default function Card({data}) {
  return (

    <div
        className="flex flex-col bg-white  rounded-xl  p-4"
        style={{
          border: "0.88px solid",

          backdropFilter: "saturate(180%) blur(14px)",
    
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold text-xl">{data.text}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{data.rollno}</p>
            <p>{data.rank}</p>
          </div>
        </div>
      </div>
  )
}
