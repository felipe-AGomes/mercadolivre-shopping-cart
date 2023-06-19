'use client';

import { ProductProps, SearchProductsInput } from '@/@types';
import useAppContext from './useAppContext';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useHandleSubmit() {
	const { currentQuery, setCurrentQuery } = useAppContext();

	const { setProducts } = useAppContext();
	const searchProductsSubmit = async (e: SearchProductsInput) => {
		const query = `https://api.mercadolibre.com/sites/MLB/search?q=${e.query}`;

		const response = (await fetch(query)) as any;
		const data = await response.json();

		setCurrentQuery(query);
		setProducts(data as any);
	};

	const addSort = async (filter: string) => {
		console.log(filter);
		const query = `${currentQuery}&sort=${filter}`;
		console.log(query);
		const response = (await fetch(query)) as any;
		const data = await response.json();
		console.log(data);

		setProducts(data as any);
	};

	return { searchProductsSubmit, addSort };
}
