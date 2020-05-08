import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div
				key={alert.id}
				role='alert'
				className={`alert alert-${alert.type} mx-2 my-4`}
			>
				<i className='fas fa-info-circle' /> {alert.msg}
			</div>
		))
	);
};

export default Alerts;
