import { HiOutlineSearch } from 'react-icons/hi';

import S from './Header.module.css';

export default function Header() {
	return (
		<header className={S.header__contain}>
			<form className={S.form__contain}>
				<input
					type='search'
					placeholder='Pesquisar...'
				/>
				<button type='submit'>
					<HiOutlineSearch size={28} />
				</button>
			</form>
		</header>
	);
}
