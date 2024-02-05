import Nft1 from '../../assets/img/gallery/Nft/Nft1.gif';
import Nft2 from '../../assets/img/gallery/Nft/Nft2.png';
import Nft3 from '../../assets/img/gallery/Nft/Nft3.png';
import Nft4 from '../../assets/img/gallery/Nft/Nft4.png';
import Nft5 from '../../assets/img/gallery/Nft/Nft5.png';
import Nft6 from '../../assets/img/gallery/Nft/Nft6.png';

const Gallery3 = () => {
   const Nft = [
      {
         ImageNft:
         Nft1,
      },
      {
         ImageNft:
         Nft2,
      },
      {
         ImageNft:
         Nft3,
      },
      {
         ImageNft:
         Nft4,
      },
      {
         ImageNft:
         Nft5,
      },
      {
         ImageNft:
         Nft6,
      },
   ]
   return (
      <div className="max-w-full mx-auto">
         <h1 className='text-white text-xl md:text-2xl mb-4'>NFT PFP</h1>
         <div className="flex flex-wrap justify-center">
            {Nft.map(({ ImageNft },) => (
               <div className="lg:w-1/3 xl:w-1/4 p-2">
                  <div className="flex relative">
                     <img
                        src={ImageNft} alt=""
                        className='inset-0 w-full h-70 opacity-75 hover:opacity-100 cursor-pointer rounded-sm object-cover object-center'
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
export default Gallery3;