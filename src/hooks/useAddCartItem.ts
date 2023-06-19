import { ProductProps } from '@/@types';
import { idGender } from '@/util/idGender';
import useAppContext from '@/hooks/useAppContext';

export default function useAddCartItem() {
	const { cartItems, setCartItems } = useAppContext();

	const removeItem = (id: string) => {
		setCartItems(cartItems.filter((item) => item.idCart !== id));
	};

	const addItem = (product: ProductProps) => {
		const idCart = idGender().createId(30);
		setCartItems([...cartItems, { ...product, idCart }]);
	};

	return { removeItem, addItem };
}
