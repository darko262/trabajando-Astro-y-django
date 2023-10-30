
import {Cardwork} from './CardWork.jsx'
import React from 'react';
import { useEffect, useState } from "react";
// import  imagen  from "src/assets/foto1.jpg";


// import { talleres } from '../Data/Datos'
export function Obtencion() {
// const response = await fetch(' http://127.0.0.1:8000/blog/list');
// const data = await response.json();
// const randomUser = data.results.posts ;
// console.log(randomUser)
const [randomUser, setRandomUser] = useState([]);

useEffect(() => {
  const fetchData = async () => {
	try {
	  const response = await fetch('http://127.0.0.1:8000/blog/list');
	  const data = await response.json();
	  const posts = data.results.posts;
	  setRandomUser(posts);
	  console.log(posts)
	} catch (error) {
	  console.error('Error al obtener datos:', error);
	}
  };

  fetchData();
}, []);
return(
<div
	className='mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12 py-12 text-white'
>
<h1 className='text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl'>
   Trabajos recientes
</h1>


	<div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2'>

		{randomUser.map(({ id, title, content ,thumbnail}) => <Cardwork key={id} title={title} content={content} thumbnail={thumbnail}/>)}
	</div>
</div>
)}