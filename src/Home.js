import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	const DBitems = [
		{
			id: ' 4903850',
			title: 'The Lean Startup',
			price: '$29',
			rating: 5,
			image:
				'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
		},
		{
			id: '23445930',
			title:
				'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
			price: 98.99,
			rating: 5,
			image:
				'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
		},
		{
			id: '3254354345',
			title:
				'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
			price: 598.99,
			rating: 4,
			image:
				'https://th.bing.com/th/id/R.0e74c0d65a34f952a53452c9e5692da6?rik=FHV2ObD46GUbpw&riu=http%3a%2f%2fwww.tandemconstruction.com%2fsites%2fdefault%2ffiles%2fstyles%2fproject_slider_main%2fpublic%2fimages%2fproject-images%2f2_8.jpg%3fitok%3dJ-9gb1QX&ehk=Qm1z%2bkKR1uTq1E9oF3TyddkE4DYPQ36CV8g%2bHwn%2ff4s%3d&risl=&pid=ImgRaw&r=0',
		},
		{
			id: '23445930',
			title:
				'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
			price: 98.99,
			rating: 5,
			image:
				'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
		},
		{
			id: '3254354345',
			title:
				'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
			price: 598.99,
			rating: 4,
			image:
				'https://th.bing.com/th/id/R.0e74c0d65a34f952a53452c9e5692da6?rik=FHV2ObD46GUbpw&riu=http%3a%2f%2fwww.tandemconstruction.com%2fsites%2fdefault%2ffiles%2fstyles%2fproject_slider_main%2fpublic%2fimages%2fproject-images%2f2_8.jpg%3fitok%3dJ-9gb1QX&ehk=Qm1z%2bkKR1uTq1E9oF3TyddkE4DYPQ36CV8g%2bHwn%2ff4s%3d&risl=&pid=ImgRaw&r=0',
		},
	];
	const handleDB = () => {
		return (
			<div className='home__row'>
				{DBitems.map((item) => (
					<Product
						id={item.id}
						title={item.title}
						price={item.price}
						rating={item.rating}
						image={item.image}
					/>
				))}
			</div>
		);
	};
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt=''
				/>
				{handleDB()}
			</div>
		</div>
	);
}

export default Home;
