import React from 'react';
import BannerImage from "../../../assets/Banner.jpg";


export default function Banner() {
    return (
        <>
            <div className='w-full h-[25rem]  relative'>
                <img src={BannerImage} alt=" Bannr" className="w-full  h-full" />
            </div>
            <div className='absolute left-0 right-0 top-30 mx-auto w-[20rem]'>
                <div className="flex flex-col gap-4">

                    <div className='font-semibold text-5xl text-white'>
                        Crypto Tracker
                    </div>
                    <div className='font-semibold text-sm text-white text-center'>
                        Get all the information regarding ctyptocurrencies
                    </div>
                </div>
            </div>
        </>
    );
}
