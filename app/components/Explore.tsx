import React from 'react';
import ExploreCard from './ExploreCard';
import { getExplore } from '../utils/api';
import { ExploreData } from '../types/app';

export default async function Explore() {
	const exploreData: ExploreData = await getExplore();

	return (
		<section className='pt-20'>
			<div className='container'>
				<h2 className='text-4xl font-semibold mb-5'>Explore Nearby</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{exploreData.map((item) => (
						<ExploreCard
							key={item.img}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
