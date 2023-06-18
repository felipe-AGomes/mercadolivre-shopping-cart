import useAppContext from '@/hooks/useAppContext';
import S from './CartNumber.module.css';

type Props = {
	style?: React.CSSProperties;
};

export default function CartNumber({ style }: Props) {
	const { cartItems } = useAppContext();

	return (
		<div
			style={{ ...style }}
			className={S.cartNumber}
		>
			<p>{cartItems.length}</p>
		</div>
	);
}
