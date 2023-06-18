import { HiOutlineSearch } from 'react-icons/hi';

import S from './HeaderPage.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartNumber from '../CartNumber';
import useAppContext from '@/hooks/useAppContext';
import { useForm } from 'react-hook-form';
import { SearchProductsInput } from '@/@types';
import useHandleSubmit from '@/hooks/useHandleSubmit';

export default function HeaderPage() {
	const { register, handleSubmit, reset } = useForm<SearchProductsInput>({
		defaultValues: { query: '' },
	});
	const { searchProductsSubmit } = useHandleSubmit();
	const { cartIsOpen, setCartIsOpen } = useAppContext();

	const onSubmit = (data: SearchProductsInput) => {
		searchProductsSubmit(data);
		reset();
	};

	return (
		<header className={S.header__contain}>
			<form
				className={S.form__contain}
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					type='search'
					autoComplete={'off'}
					placeholder='Pesquisar...'
					{...register('query')}
				/>
				<button type='submit'>
					<HiOutlineSearch size={28} />
				</button>
			</form>
			<div
				className={`${S.cartIcon__contain} ${cartIsOpen ? S.active : ''}`}
				onClick={() => setCartIsOpen(!cartIsOpen)}
			>
				<AiOutlineShoppingCart size={28} />
				<CartNumber
					style={{
						background: 'var(--orange)',
						top: '5px',
						left: '5px',
						width: '15px',
						height: '15px',
					}}
				/>
			</div>
		</header>
	);
}
