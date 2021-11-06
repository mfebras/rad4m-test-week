import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { ModalContext } from '../../contexts/ModalContext';
import icUsers from '../../assets/icons/users.png'
import icDotsPurple from '../../assets/icons/dots-purple.png'
import icGrid from '../../assets/icons/grid.png'
import icChevronDown from '../../assets/icons/chevron-down.png'
import icPlusWhite from '../../assets/icons/plus-white.png'
import icSearch from '../../assets/icons/search.png'
import icUser from '../../assets/icons/user.png'
import icEyeOff from '../../assets/icons/eye-off.png'
import icAdjustment from '../../assets/icons/adjustment.png'
import icGearWhite from '../../assets/icons/gear-white.png'
import style from './Header.scss';


export const Header = () => {
    const { setModal } = useContext(ModalContext);

	return (
		<header class={`${style.header} flex flex-col justify-between`}>
			<div class="flex flex-row justify-between">
				<div class="flex flex-col">
					<h3 class={`${style.title} m-0`}>Board Name</h3>
					<div class={style.subtitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</div>
				</div>
				<div class="flex flex-row items-center">
					<button class="btn-outline btn-icon mr-1">
						<img src={icUsers} alt="" style={{ marginRight: '5px' }} /> / 12
					</button>
					<button class="btn-outline">Active users / <span class="text-primary" style={{ marginLeft: '4px' }}>12</span></button>
					<button class="btn btn-icon">
						<img src={icDotsPurple} alt="..." />
					</button>
				</div>
			</div>
			<div class={`${style.toolbar} flex flex-row justify-between`}>
				<div>
					<button class={`btn btn-icon ${style.btnCalendar}`}>
						<img src={icGrid} alt="" />
						<b>Calendar</b>
						<img class={style.iconSm} src={icChevronDown} alt="" />
					</button>
				</div>
				<div class="flex flex-row items-center">
					<button
						class={`btn btn-icon ${style.btnCalendar}`}
						onClick={() => setModal({
							isShow: true,
							type: 'create'
						})}
					>
						<div class={style.btnPlus}>
							<img src={icPlusWhite} alt="" />
						</div>
						Add new
					</button>
					
					<button class={`btn-outline btn-icon ${style.btnIcon}`}>
						<img src={icSearch} alt="" />
					</button>
					<button class={`btn-outline btn-icon ${style.btnIcon}`}>
						<img src={icUser} alt="" />
					</button>
					<button class={`btn-outline btn-icon ${style.btnEye}`}>
						<img src={icEyeOff} alt="" />
					</button>
					<button class={`btn-outline btn-icon ${style.btnIcon}`}>
						<img src={icAdjustment} alt="" />
					</button>
					<button class={`btn btn-icon ${style.btnPrimary}`}>
						<img src={icGearWhite} alt="" />
					</button>
				</div>
			</div>
		</header>
	);
}