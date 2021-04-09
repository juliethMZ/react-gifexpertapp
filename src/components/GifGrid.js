import React from 'react'   
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

 const {data:images, loading}= useFetchGifs ( category );
 


 /* useEffect (() => {
   getGifs ( category)
   .then (setimages);
 }, [category])*/

    /*const getGifs = async () => {
        
            const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=0ZVK57DTHSlo1EWM4esxR0iOvhpNYb5q`;
            const resp = await fetch(url);
            const {data} = await resp.json();

            const gifs = data.map (img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
            console.log (gifs);
            setimages (gifs);
         }*/
        
    //esta funcion lo unico que hace es  la peticion https, trae las imagenes y
    //las procesa y podria retornarlas     
            
    //getGifs();

    return (
        <>
       <h3 className = 'animate__animated animate__fadeIn'>{category}</h3>

       {loading && <p className = " animate__animated animate__flash"    >loading</p>}
      
       <div className = "card-grid" >
     {
         images.map (img => (
            <GifGridItem 
            key = {img.id}
             {...img} />
         ))
     }
    </div>
        </>
    )
}


