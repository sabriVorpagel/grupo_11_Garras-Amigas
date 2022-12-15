import React from 'react';

import {Metric} from './Metric';
import { Categories } from './Categories';
import { LastProduct } from './LasProduct';

function ContentRowTop(){

	const metrics = [
		{
			title : "Movies in Data Base",
			color: "primary",
			icon: "fa-film",
			data: 21
		},
		{
			title : "Total awards",
			color: "success",
			icon: "fa-award",
			data: 79
		},
		{
			title : "Actors quantity",
			color: "warning",
			icon: "fa-user",
			data: 49
		}
	]

return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{
							metrics.map((metric, index) => (
								<Metric {...metric} /> 
							))
						}

					</div>	
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProduct />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<Categories />
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;