import { useState } from 'react';
import S from './Filter.module.css';
import useAppContext from '@/hooks/useAppContext';
import useHandleSubmit from '@/hooks/useHandleSubmit';

export default function Filter() {
	const { products } = useAppContext();
	const { addSort } = useHandleSubmit();
	const [filterOpen, setFilterOpen] = useState(false);

	const handleFilterOpen = () => {
		setFilterOpen(!filterOpen);
	};

	return (
		<>
			{products && (
				<div className={`${S.sort__contain} ${filterOpen ? S.active : ''}`}>
					<div 
					className={S.sortHeader__contain}
					onClick={handleFilterOpen}>
						<h3>{products?.sort ? `Ordenar: ${products.sort.name}` : ''}</h3>
					</div>
					<>
						{products?.available_sorts && (
							<ul className={`${filterOpen ? S.active : ''}`}>
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
					</>
				</div>
			)}
		</>
	);
}
