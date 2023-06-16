import React from 'react'
import Welcome from '../components/Welcome'
import LastRelease from '../components/LatestRelease'

export default function HomePage({filteredBooks,handleChangeInput}) {
  return (
    <>
    <Welcome />
    <LastRelease handleChangeInput={handleChangeInput} filteredBooks={filteredBooks} />
    </>
  )
}
