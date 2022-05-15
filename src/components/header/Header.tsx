import React from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.png'
import MoneyItem from './moneyItem/MoneyItem';
import usdIcon from '../../img/usd.png'
import eurIcon from '../../img/eu.png'
import { useAppSelector } from '../../store/store';
interface IProps {
	values?:[]
}

const Header:React.FC<IProps> = ({values}) => {
	const {USD, EUR} = useAppSelector(state => state.moneyValues.values)
  return (
	<header className={styles.header} id="header">
			<div className="container">
				<div className={styles.header__inner}>
					
					<a className={styles.header__logo}  href="/">
									
						<img width={45} height={45} src={logo} alt="money-convert"/>
					<span className={styles.header__logoName}>Money-converter</span></a> 
				
					<nav className={styles.nav}>
						<MoneyItem icon={usdIcon} description='USD' values={USD}></MoneyItem>
						<MoneyItem icon={eurIcon} description='EUR' values={EUR}></MoneyItem>
					</nav>

				</div>
			</div>


		</header>
  )
}

export default Header