import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { ModalContext } from '../../contexts/ModalContext';
import icClose from '../../assets/icons/close.png'
import style from './Modal.scss';

export const Modal = ({ children, ...props }) => {
    const { setModal } = useContext(ModalContext);

    const closeModal = () => {
    	setModal({
			isShow: false,
			type: ''
		});
    }

	if (!props.show) {
		return null;
	}

	return (
		<div class={style.modal}>
			<div
				class={style.backdrop}
				onClick={() => closeModal()}
			></div>

			<div class={style.modalDialog}>
				<div class={`${style.modalHeader} flex flex-row`}>
					<button
						class="btn btn-icon"
						onClick={() => closeModal()}
					>
						<img src={icClose} alt="x" />
					</button>
				</div>
				<div class={style.modalBody}>
					{children}
				</div>
			</div>
		</div>
	);
}
