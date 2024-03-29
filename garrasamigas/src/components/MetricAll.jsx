import React, { useEffect, useState } from 'react';
import { fetchWithoutToken } from '../hooks/userFech';
import { Categories } from './Categories';
<<<<<<< HEAD
import { LastProduct } from './LastProduct';
=======
import { LastProducts } from './LastMovieInDb';

>>>>>>> master
import { Metric } from './Metric';


function MetricAll() {

	const [state, setState] = useState({
		loading: true,
		products: {
			title: "Total productos",
			color: "primary",
			icon: "fa-boxes",
			data: 0,
		},
		users: {
			title: "Usuarios registrados",
			color: "success",
			icon: "fa-users",
			data: 0,
		},
		categories: {
			title: "Categorias activas",
			color: "warning",
			icon: "fa-folder",
			data: 0,
		},
	});

	// const getData = async (endpoint) => {
	// 	try{
	// 		let response = await fetchWithoutToken(endpoint);
	// 		return response;
	// 	} catch(error){
			
	// 	}
	// };

	// useEffect(() => {
	// 	getData("/totals")
	// 	.then(({data}) => {
	// 		setState({
	// 			loading: false,
	// 			products:{
	// 				...state.products,
	// 				data: data.productsTotal,
	// 			},
	// 			users: {
	// 				...users,
	// 				data: data.usersTotal,
	// 			},
	// 			categories: {
	// 				...categories,
	// 				data: data.categoriesTotal,
	// 			},
	// 		})
	// 	})
	// 	.catch(()=> console.error);
	// }, []);

	const getData = async (endpoint) => {
		try {
		  let {data} = await fetchWithoutToken(endpoint);
		  setState({
			loading: false,
			products: {
			  ...state.products,
			  data: data.productsTotal,
			},
			users: {
			  ...state.users,
			  data: data.usersTotal,
			},
			categories: {
			  ...state.categories,
			  data: data.categoriesTotal,
			},
		  });
		} catch (error) {
		  console.log(error);
		}
	  };
	
	  useEffect(() => {
		getData("/total")
	  }, []);


	const {products, users, categories} = state;


	return (
		<React.Fragment>

			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>


				<div className="row">

					<Metric {...products} />
					<Metric {...users} />
					<Metric {...categories} />


				</div>




				<div className="row">

					<LastProduct />



					<Categories />
				</div>
			</div>


		</React.Fragment>
	)

}
export default MetricAll;
