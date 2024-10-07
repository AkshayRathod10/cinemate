import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { useState, useEffect  } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'


export const Search = ({apiPath}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")

  const {data: movies} = useFetch(apiPath, queryTerm)

  return (
    <>
      <Header />
      <main className=''>
        <div className='p-3 flex flex-wrap mx-auto'>
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
