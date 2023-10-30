export function Cardwork({id , title, content,thumbnail}){



return(
<a href="#" className='bg-cover bg-center  rounded-3xl group' >
	

	<div className=" h-52 backdrop-blur-sm grid  grid-cols-2  backdrop-grayscale rounded-s-3xl">
	
	<img src={thumbnail} alt='imagen' className=' overflow-hidden h-52  w-52 my-auto  object-cover  rounded-e-full object-center  group-hover:scale-105 transition-all  group-hover:rounded-full' />
		
		<div className='h-full place-content-center  text-center grid  backdrop-opacity-80 font-bold'>
			<h3 className='text-center'>{title}</h3><p className=' '>
				{content}
			</p>
		</div>
	</div>
</a>

)
}

