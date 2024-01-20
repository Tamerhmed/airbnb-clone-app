import { LiveData } from '../types/app';
import { getLive } from '../utils/api';
import LiveCard from './LiveCard';

const Live = async () => {
	const liveData: LiveData = await getLive();
    // console.log(liveData)
	return (
		<section className='pt-20'>
			<div className='container'>
				<h2 className='text-4xl font-semibold mb-5'>Live Anywhere on Airbnb</h2>
				<div className='flex space-x-3 overflow-scroll p-3 no-scrollbar flex-wrap justify-center items-center'>
					{liveData.map((item) => (
						<LiveCard
							key={item.img}
							img={item.img}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Live;
