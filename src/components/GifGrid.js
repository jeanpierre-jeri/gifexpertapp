import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem"
import Loading from "./Loading"

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && <Loading />}
      <div className="cards">
        {images.map(image => <GifGridItem key={image.id} {...image} />)}
      </div>
    </>
  )
}

export default GifGrid