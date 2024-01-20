'use client';

import { useState } from 'react';
import { SearchIcon, UsersIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import Link from 'next/link';

export default function Searchbar() {
	const [input, setInput] = useState('hello');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numOfGuests, setNumOfGuests] = useState(1);

	const selectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	const handleSelect = (ranges: RangeKeyDict) => {
		console.log(ranges);
		setStartDate(ranges.selection.startDate as Date);
		setEndDate(ranges.selection.endDate as Date);
	};

	return (
		<>
			<div className='flex items-center justify-center md:border-2 rounded-full pt-2 md:shadow-sm'>
				<input
					type='text'
					placeholder='Start your search'
					className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>
			{input && (
				<div className='absolute top-[100%] left-[50%] translate-x-[-50%]  flex flex-col col-span-3 mx-auto pt-4 bg-white '>
					<DateRangePicker
						ranges={[selectionRange]}
						onChange={handleSelect}
						rangeColors={['#FD5B61']}
						minDate={new Date()}
					/>
					<div className='flex items-center border-b bg-red-400 text-white py-2 px-4 mt-4'>
						<h2 className='text-xl flex-grow font-semibold'>
							Number of Guests
						</h2>
						<UsersIcon className='h-5' />
						<input
							type='number'
							className='w-12 pl-2 text-lg outline-none bg-red-400'
							value={numOfGuests}
							min={1}
							onChange={(e) => setNumOfGuests(Number(e.target.value))}
						/>
					</div>
					<div className='flex flex-row items-center justify-center gap-4 bg-red-400 py-2 border '>
						<button
							type='button'
							className='  border-2 px-4 py-1 bg-white text-red-500 hover:bg-red-400 hover:text-white'
							onClick={() => setInput('')}
						>
							Cancel
						</button>
						<Link
							href={'/'}
							className='border-2 px-4 py-1 bg-white text-red-500  hover:bg-red-400 hover:text-white'
						>
							Search
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
