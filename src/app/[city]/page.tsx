import DentistMap from '@/components/DentistMap'
import DentistList from '@/components/DentistList'
import FilterControls from '@/components/FilterControls'

export default function CityPage({ params }: { params: { city: string } }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/3">
        <FilterControls />
        <DentistMap city={params.city} />
      </div>
      <div className="w-full md:w-1/3">
        <DentistList city={params.city} />
      </div>
    </div>
  )
}