import S from './CartNumber.module.css';

type Props = {
	style?: React.CSSProperties;
};

export default function CartNumber({ style }: Props) {
	return (
		<div
			style={{ ...style }}
			className={S.cartNumber}
		>
			<p>5</p>
		</div>
	);
}
