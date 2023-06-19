import S from './CartEmpty.module.css';

export default function CartEmpty() {
	return (
		<div className={S.emptyCart__contain}>
			<h3>Carrinho Vazio</h3>
		</div>
	);
}
