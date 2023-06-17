/* eslint-disable @next/next/no-img-element */
import S from './page.module.css';
import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className={S.products__contain}>
					<div className={S.product__card}>
						<div className={S.image__contain}>
							<img
								src='http://http2.mlstatic.com/D_960487-MLA54126902851_032023-W.jpg'
								alt=''
							/>
						</div>
						<div className={S.description__contain}>
              <p>R$ 990,00</p>
              <h2>Motorola Moto G32 Dual Sim 128 Gb 4 Gb Ram Preto</h2>
            </div>
					</div>
					<div className={S.product__card}>
						<div className={S.image__contain}>
							<img
								src='http://http2.mlstatic.com/D_960487-MLA54126902851_032023-W.jpg'
								alt=''
							/>
						</div>
						<div className={S.description__contain}>
              <p>R$ 990,00</p>
              <h2>Motorola Moto G32 Dual Sim 128 Gb 4 Gb Ram Preto</h2>
            </div>
					</div>
					<div className={S.product__card}>
						<div className={S.image__contain}>
							<img
								src='http://http2.mlstatic.com/D_960487-MLA54126902851_032023-W.jpg'
								alt=''
							/>
						</div>
						<div className={S.description__contain}>
              <p>R$ 990,00</p>
              <h2>Motorola Moto G32 Dual Sim 128 Gb 4 Gb Ram Preto</h2>
            </div>
					</div>
				</div>
			</main>
		</>
	);
}
