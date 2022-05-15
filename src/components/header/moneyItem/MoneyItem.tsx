import React from 'react';
import styles from './MoneyItem.module.scss';

interface IProps {
	icon: string,
	description: string,
	values: number
}
const MoneyItem:React.FC<IProps> = ({icon, description, values}) => {
  return (
	<div className={styles.item}>
		<div className={styles.item__icon}>
			<img width={35} height={35} src={icon} alt={description} />
		</div>
		<div className={styles.item__idescription}>{description}
		<div className={styles.item__values}>{values}</div>
		</div>
		
	</div>
  )
}

export default MoneyItem