import { HiOutlineSearch } from 'react-icons/hi';

import S from './HeaderPage.module.css';

export default function HeaderPage() {
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
