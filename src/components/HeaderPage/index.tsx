'use client';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { SearchProductsInput } from '@/@types';
import CartNumber from '../CartNumber';
import useAppContext from '@/hooks/useAppContext';
import useHandleSubmit from '@/hooks/useHandleSubmit';
import S from './HeaderPage.module.css';
import { useState } from 'react';

export default function HeaderPage() {
	const { register, handleSubmit, reset } = useForm<SearchProductsInput>({
		defaultValues: { query: '' },
	});
	const { searchProductsSubmit, addSort } = useHandleSubmit();
	const { cartIsOpen, products, setCartIsOpen } = useAppContext();
	const [filterOpen, setFilterOpen] = useState(false);

	const onSubmit = (data: SearchProductsInput) => {
		searchProductsSubmit(data);
		reset();
	};

	const handleFilterOpen = () => {
		setFilterOpen(!filterOpen);
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

				<div
					className={S.sort__contain}
					onClick={handleFilterOpen}
				>
					<h3>Filtros: {products?.sort ? products.sort.name : 'Filtros'}</h3>
					{products?.available_sorts && filterOpen && (
						<ul>
							{products.available_sorts.map((sort) => {
								return (
									<li
										key={sort.id}
										onClick={() => addSort(sort.id)}
									>
										{sort.name}
									</li>
								);
							})}
						</ul>
					)}
				</div>
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
