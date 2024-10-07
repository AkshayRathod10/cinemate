import { useEffect, useState } from "react";

export const useFetch = (apiPath, search="") => {
    
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&api_key=72d005cab8d3ba3bf1c3b3c9e9055568&query=${search}`

    const [data, setData] = useState([])

    useEffect(() => {

        async function FetchMovies(){
    
          const response = await fetch(url);
          const json = await response.json()
          setData(json.results)
    
        }
    
        FetchMovies()
    
      }, [url])

  return (
    {data}
  )
}
