import React from 'react'
import { Link } from 'react-router-dom';

const Poster = (props) => {
  const languages = [
    { "name": "English", "code": "en" },
    { "name": "Spanish", "code": "es" },
    { "name": "French", "code": "fr" },
    { "name": "Hindi", "code": "hi" },
    { "name": "Mandarin", "code": "zh" },
    { "name": "Arabic", "code": "ar" },
    { "name": "Bengali", "code": "bn" },
    { "name": "Portuguese", "code": "pt" },
    { "name": "Russian", "code": "ru" },
    { "name": "Japanese", "code": "ja" },
    { "name": "German", "code": "de" },
    { "name": "Korean", "code": "ko" },
    { "name": "Italian", "code": "it" },
    { "name": "Tamil", "code": "ta" },
    { "name": "Telugu", "code": "te" },
    { "name": "Malayalam", "code": "ml" },
    { "name": "Turkish", "code": "tr" },
    { "name": "Dutch", "code": "nl" },
    { "name": "Persian", "code": "fa" },
    { "name": "Thai", "code": "th" },
    { "name": "Polish", "code": "pl" },
    { "name": "Cantonese", "code": "zh-yue" },
    { "name": "Punjabi", "code": "pa" },
    { "name": "Marathi", "code": "mr" },
    { "name": "Gujarati", "code": "gu" },
    { "name": "Ukrainian", "code": "uk" },
    { "name": "Vietnamese", "code": "vi" },
    { "name": "Swedish", "code": "sv" },
    { "name": "Norwegian", "code": "no" },
    { "name": "Danish", "code": "da" },
    { "name": "Finnish", "code": "fi" },
    { "name": "Greek", "code": "el" },
    { "name": "Hebrew", "code": "he" },
    { "name": "Hungarian", "code": "hu" },
    { "name": "Czech", "code": "cs" },
    { "name": "Slovak", "code": "sk" },
    { "name": "Serbian", "code": "sr" },
    { "name": "Croatian", "code": "hr" },
    { "name": "Bulgarian", "code": "bg" },
    { "name": "Romanian", "code": "ro" },
    { "name": "Malay", "code": "ms" },
    { "name": "Indonesian", "code": "id" },
    { "name": "Filipino", "code": "fil" },
    { "name": "Sinhala", "code": "si" },
    { "name": "Burmese", "code": "my" },
    { "name": "Khmer", "code": "km" },
    { "name": "Lao", "code": "lo" },
    { "name": "Swahili", "code": "sw" },
    { "name": "Zulu", "code": "zu" },
    { "name": "Xhosa", "code": "xh" },
    { "name": "Afrikaans", "code": "af" },
    { "name": "Hausa", "code": "ha" },
    { "name": "Yoruba", "code": "yo" },
    { "name": "Igbo", "code": "ig" }
  ];

  // Find the matching language
  const languageName = languages
    .filter((language) => language.code === props.original_language) // Filter for matching language
    .map((language) => language.name)
  return (
    <>
     <Link to={`/movie/${props.id}`}>
    <div className='flex flex-col items-start p-3 cursor-pointer'>
        <div className='w-full h-full '>
          <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title} className='w-full h-full rounded-xl' />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
        <p className={`text-sm font ${props.isDark ? "text-white" : "text-gray-700"}`}>{languageName}</p>
      </div>
     </Link>

    </>
  )
}

export default Poster
