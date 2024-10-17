import React from 'react';
import { useSelector } from 'react-redux';
import './modalResult.css'

interface ModalResultProps {
	setVisible: (visible: boolean) => void;
}

const ModalResult: React.FC<ModalResultProps> = ({ setVisible }) => {
	const instance = useSelector((state: any) => state.flow.instance);

	return (
		<div className='modal-centralized'>
			<div className='modal'>
				<div className='modal-header'>
					<h1 className='modal-title'>Instance</h1>
					<button onClick={() => setVisible(false)}>
						<span className='material-symbols-outlined'>close</span>
					</button>
				</div>
				<hr />
				<div className='modal-body'>
					<pre>{JSON.stringify(instance, null, 2)}</pre>
				</div>
			</div>
		</div>
	);
};

export default ModalResult;