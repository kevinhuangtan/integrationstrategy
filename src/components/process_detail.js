import React from 'react';

const ProcessDetail = ({process}) => {
	if (!process){
		return <h1>Loading... </h1>
	}
	return(
		<div className="process-detail col-md-8">
			<div className="image col-md-4">{process.image}</div>
			<div className="text col-md-8">{process.text}</div>
		</div>
	);
}

export default ProcessDetail;