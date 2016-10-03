import React from 'react';
import ProcessListItem from './process_list_item';

const ProcessList = (props) => {
	
	const processItems = props.processItems.map((process) => {
		return(
			<ProcessListItem
				onProcessSelect = {props.onProcessSelect}
				key={process.key}
				process={process} />
		);
	});


	return(
		<ul className="col-md-4 list-group">
			{processItems}
		</ul>
	);
}

export default ProcessList;