'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const cities = [
    "Salt Lake City, UT", "West Valley City, UT", "West Jordan, UT", 
    "Provo, UT", "St. George, UT", "Orem, UT", "Sandy, UT", "Lehi, UT", 
    "Ogden, UT", "South Jordan, UT", "Layton, UT", "Millcreek, UT", 
    "Herriman, UT", "Taylorsville, UT", "Eagle Mountain, UT", "Logan, UT", 
    "Saratoga Springs, UT", "Draper, UT", "Murray, UT", "Spanish Fork, UT", 
    "Riverton, UT", "Bountiful, UT", "Cedar City, UT", "Tooele, UT", 
    "Roy, UT", "American Fork, UT", "Kearns, UT", "Pleasant Grove, UT", 
    "Syracuse, UT", "Midvale, UT", "Springville, UT", "Clearfield, UT", 
    "Washington, UT", "Kaysville, UT", "Cottonwood Heights, UT", 
    "Holladay, UT", "Magna, UT", "South Salt Lake, UT", "Farmington, UT", 
    "Payson, UT", "West Haven, UT", "Hurricane, UT", "Clinton, UT", 
    "North Salt Lake, UT", "North Ogden, UT", "Highland, UT", 
    "Brigham City, UT", "Bluffdale, UT", "Heber, UT", "South Ogden, UT", 
    "Santaquin, UT", "Centerville, UT", "Grantsville, UT", "Smithfield, UT", 
    "Vineyard, UT", "Mapleton, UT", "West Point, UT", "Tremonton, UT", 
    "Lindon, UT", "North Logan, UT", "Woods Cross, UT", "Pleasant View, UT", 
    "Hyrum, UT", "Salem, UT", "Vernal, UT", "Stansbury Park, UT", "Alpine, UT", 
    "Ivins, UT", "Cedar Hills, UT", "Hooper, UT", "Providence, UT", 
    "Riverdale, UT", "Washington Terrace, UT", "Summit Park, UT", 
    "Plain City, UT", "Santa Clara, UT", "Enoch, UT", "Nibley, UT", 
    "Richfield, UT", "Price, UT", "Park City, UT", "South Weber, UT", 
    "Farr West, UT", "Roosevelt, UT", "Nephi, UT", "Harrisville, UT", 
    "Ephraim, UT", "Midway, UT", "Fruit Heights, UT", "Perry, UT", 
    "West Bountiful, UT", "Snyderville, UT", "Hyde Park, UT", 
    "White City, UT", "Sunset, UT", "Kanab, UT", "Moab, UT", "Elk Ridge, UT", 
    "Morgan, UT", "La Verkin, UT"
];

export default function CitySearch() {
  const [search, setSearch] = useState('')
  const [filteredCities, setFilteredCities] = useState(cities)
  const router = useRouter()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    setFilteredCities(cities.filter(city => 
      city.toLowerCase().includes(value.toLowerCase())
    ))
  }

  const handleCitySelect = (city: string) => {
    router.push(`/${encodeURIComponent(city)}`)
  }

  return (
    <div className="w-full max-w-md">
      <input 
        type="text" 
        value={search} 
        onChange={handleSearch} 
        placeholder="Search for a city"
        className="w-full p-2 border rounded"
      />
      <ul className="mt-2 bg-white border rounded max-h-60 overflow-auto">
        {filteredCities.map(city => (
          <li 
            key={city} 
            onClick={() => handleCitySelect(city)}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  )
}