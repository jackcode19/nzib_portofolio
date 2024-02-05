import { imageScanes } from '../subcomponents/export';

const Gallery1 = () => {

   const Scenes = imageScanes;

   return (
      <div className="max-w-full mx-auto">
         <h1 className='text-white text-xl md:text-2xl mb-4'>Scenes</h1>
         <div className="flex flex-wrap justify-center item-center">
            {Scenes.map(({ imageScanes },) => (
               <div className="md:w-1/2 lg:w-1/3 p-2">
                  <div className="flex relative">
                     <img
                        src={imageScanes} alt=""
                        className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                     />
                  </div>
               </div> 
            ))}
         </div>
      </div>
   )
}
export default Gallery1;