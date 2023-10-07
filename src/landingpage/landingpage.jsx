import React from 'react'

const landingpage = () => {
  return (
    <div className='bg-gray flex'>
    <div className='absolute items-center justify-center ml-10 '>
      
      <img className= "w-[339px] h-[339px] justify-center top-[124px] flex"
    src="https://s3-alpha-sig.figma.com/img/e4fe/c9ea/86765492c18c47f2805c052962803555?Expires=1697414400&Signature=AzY6W08tpUDbtZtCkFpSV7qqi5h1VKM-tf2W4-RtjXSraOpIceJYYp~ezSNrCsLXnHYuK1gvFi48xO8Ekgagi8JR3z6AQbAmh2vVci~BvVdaPiLiPN1MbrlaZ0Xo3YFfIyhV1NUr6OnbHKdxwVPW8s6kbig7jAzui0uvJ-SdyxC9tGR2Oo6Vs6CuJLYsWbCzxpCb2532GzF-G8J7JfWBQPz6F3lHRJR-is65mBvuYCe9ebu9et8E9RM2UJTfsDte8AkGHtRQqr6QFZjLOh3dipCU1y7460qkUU4uKWeNei4lz5c92uaUm7UW9dDmHr1Fh9Dhu~t3gLQlklESuXgGcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    alt=''
    /> 

    <h1 className="text-2xlg font-bold ml-10 items-center justify-center">Votechain</h1>

    <div className="mt-5 flex text-black text-lg font-['Baloo Da 2']">
    Welcome to Votechain! to proceed click here
    </div>

    <button className="mt-11 absolute ml-20 shadow bg-red text-white font-bold py-2 px-4 rounded-full">
     Get started
   </button>
    </div>
   </div>
  )
}

export default landingpage

