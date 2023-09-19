
import Gallery from "./Gallery";


// Export an array of your images
const ImageList = ({ images }) => {



    return (
        <div className=" w-full h-screen">
            <div className="grid grid-cols-4 gap-4">
                {images.map((image) => (
                    <div key={image.id} className="bg-white p-4 rounded-md shadow-md">
                        <img src={image.src} alt={image.tag} className="w-full xl:h-[17rem] rounded-md h-[6rem] lg:h-[12rem] md:h-[8rem]" />
                        <div className=" flex justify-center">
                            <button className="bg-gray-200 text-gray-700 mt-2 mx-auto p-2 xl:text-[1rem] text-[.6rem] md:text-[1rem] lg:text-[1rem] rounded-md">
                                {image.tag}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ImageList;


