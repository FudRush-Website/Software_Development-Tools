import {getImgUrl} from '../../utils/getImgUrl'

const RestaurantCard = ({restaurant}) => {

    return (
        <div className=" rounded-lg transition-shadow duration-300">
            <div
                className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
            >
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <img
                        src={`${getImgUrl(restaurant?.coverImage)}`}
                        alt=""
                        className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />

                </div>

                <div>
                    <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {restaurant?.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{restaurant?.address}</p>
                    <p className="font-medium mb-5">{restaurant?.category}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard