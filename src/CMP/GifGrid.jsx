import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../HOOKS/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, loading } = useFetchGifs( category );
  
  return (
    <>
        {
          loading && <h2 data-testid="loading">Cargando...</h2>
        }

        <h3>{ category }</h3>

        <div className='card-grid'>
          {
            images.map( image => (
              <GifItem { ...image } key={image.id}/>
            ))
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
