import { h } from 'preact';
import icUsers from '../../assets/icons/users.png'
import icGrid from '../../assets/icons/grid.png'
import icChevronDown from '../../assets/icons/chevron-down.png'
import icPlusWhite from '../../assets/icons/plus-white.png'
import icSearch from '../../assets/icons/search.png'
import icUser from '../../assets/icons/user.png'
import icEyeOff from '../../assets/icons/eye-off.png'
import icAdjustment from '../../assets/icons/adjustment.png'
import style from './calendar-styles.scss';

export const Header = () => {
	return (
		<header class={style.header}>
			<div class="flex flex-row justify-between">
				<div class="flex flex-col">
					<h3 class={`${style.title} m-0`}>Board Name</h3>
					<div class={style.subtitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</div>
				</div>
				<div class="flex flex-row items-center">
					<button class="btn-outline btn-icon mr-1">
						<img src={icUsers} alt="" /> / 12
					</button>
					<button class="btn-outline">Active users / <span class="text-primary">12</span></button>
					<button class="btn">...</button>
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
					<button class={`btn btn-icon ${style.btnCalendar}`}>
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
				</div>
			</div>
		</header>
	);
}