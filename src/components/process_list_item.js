import React from 'react';

const ProcessListItem = ({process, onProcessSelect}) => {


	return(
		<li onClick={() => onProcessSelect(process)} className="list-group-item">
			{process.title}
		</li>
	);
}

export default ProcessListItem;