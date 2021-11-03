import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export const Header = () => (
	<header class="flex flex-row justify-between">
		<div class="flex flex-col">
			<h3>Board Name</h3>
			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
		</div>
		<div class="flex flex-row">
			<button>1</button>
			<button>2</button>
			<button>3</button>
		</div>
	</header>
);
