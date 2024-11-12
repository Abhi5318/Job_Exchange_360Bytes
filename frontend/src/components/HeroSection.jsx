import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-3 rounded-full bg-gray-100 text-[#F83002] font-medium transition-all duration-300 ease-in-out hover:bg-[#F83002] hover:text-white hover:scale-105'>
  Discover Jobs Tailored for You!
</span>

                <h1 className='text-4xl font-bold py-2'>Your Next Opportunity Awaits <br /></h1><h2 className='text-3xl font-bold transform transition-transform duration-200 hover:scale-110'><span className='text-[#1976d2]'>Search, Apply, Succeed!</span></h2>
                <p>"The Job You’ve Been Waiting For is Waiting for You!"</p>
                <div className='flex w-[50%] shadow-lg border border-gray-200 pl-4 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-1.5xl'

                    />
                   <Button onClick={searchJobHandler} className="px-6 py-2 rounded-r-full bg-[#1976d2]">
    <Search className='h-5 w-5' />
</Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection