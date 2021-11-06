import { h, createContext } from 'preact';
import { useState } from 'preact/hooks';

interface modal {
	isShow: boolean,
	type?: string
}

type ContextType = {
	modal: modal,
	setModal: (modal: modal) => void,
}

const contextDefaultValues: ContextType = {
	modal: {
		isShow: false,
		type: ''
	},
	setModal: () => {},
}

export const ModalContext = createContext<ContextType>(contextDefaultValues);

export const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState<modal>({});

	return (
		<ModalContext.Provider value={{ modal, setModal }}>
			{children}
		</ModalContext.Provider>
	);
}
