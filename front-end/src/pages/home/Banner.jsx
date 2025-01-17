import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full  flex items-center md:justify-end'>
                <img src={bannerImg} alt=""/>
            </div>

            <div className='md:w-1/2 w-full'>
                <h1 className='md:text-5xl text-2xl font-medium mb-7'>Craving It? We've Got You Covered!</h1>
                <p className='mb-10'>From quick bites to full meals, explore a wide variety of restaurants with options
                    to suit every craving and budget. Affordable, fast, and convenient delivery—right to your door!</p>
                <button className="relative w-36 rounded inline-block font-medium group py-3 px-5 ">
                    <span
                        className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-gray-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span
                        className="absolute inset-0 w-full h-full bg-primary border border-primary group-hover:bg-primary"></span>
                    <span className="relative text-2xl text-white ">Order</span>
                </button>
            </div>
        </div>
    )
}

export default Banner