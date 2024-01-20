import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';

export default function Header() {
	return (
		<header className='sticky top-0 z-50 bg-white shadow-md py-5'>
			<div className='container flex items-center justify-center gap-4 relative'>
				<Link
					href={'/'}
					className='relative flex items-center h-10 my-auto'
				>
					<Image
						src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
						alt='logo-img'
						fill
						className='object-contain object-left'
					/>
				</Link>
				<Searchbar />
				<Navbar />
			</div>
		</header>
	);
}
