import Sprites1 from '../../assets/img/gallery/Sprites/Sprites1.gif'
import Sprites2 from '../../assets/img/gallery/Sprites/Sprites2.gif'
import Sprites3 from '../../assets/img/gallery/Sprites/Sprites3.gif'
import Sprites4 from '../../assets/img/gallery/Sprites/Sprites4.gif'

const Gallery2 = () => {
   const Sprires = [
      {
         imageSprites: 
         Sprites1,
      },
      {
         imageSprites: 
         Sprites2,
      },
      {
         imageSprites: 
         Sprites3,
      },
      {
         imageSprites: 
         Sprites4,
      },
   ]
   return (
      <div className="max-w-full mx-auto">
         <h1 className='text-white text-xl md:text-2xl mb-4'>Sprites</h1>
         <div className="flex flex-wrap justify-center">
            {Sprires.map(({ imageSprites },) => (
            <div className="md:w-1/2 lg:w-1/3 p-2">
               <div className="flex relative">
                  <img
                  src={imageSprites}
                  alt="Photo by Claudio Schwarz on Unsplash"
                  className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"></img>
               </div>
            </div> 
            ))}
            
         </div>
      </div>
   )
}
export default Gallery2;