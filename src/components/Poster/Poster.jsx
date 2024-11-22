import React from 'react'

const Poster = (props) => {
  const languages = [
    { name: "English", code: "en" },
    { name: "Hindi", code: "hi" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Chinese", code: "zh" },
    { name: "Japanese", code: "ja" },
    { name: "Russian", code: "ru" },
    { name: "Arabic", code: "ar" },
    { name: "Portuguese", code: "pt" }
  ];

  // Find the matching language
  const languageName = languages
    .filter((language) => language.code === props.original_language) // Filter for matching language
    .map((language) => language.name)
  return (
    <>
      <div className='flex flex-col items-start p-3'>
        <div className='w-full h-full '>
          <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title} className='w-full h-full rounded-xl' />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
        <p className={`text-sm font ${props.isDark ? "text-white" : "text-gray-700"}`}>{languageName}</p>
      </div>

    </>
  )
}

export default Poster
