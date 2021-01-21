
import styles from '../styles/AmountOfTypeDisplay.module.scss';
import classnames from 'classnames';
import MinusButton from "./MinusButton";



const AmountOfTypeDisplay = ({amount, Icon, name, type, onClickUpdateCurrencyType}) =>  {

	let classNames = classnames({[styles.amount]: type === 'dollar'},  {[styles.amountCoin]: type === 'coin'})
	let classNamesImg = classnames({[styles.img]: type === 'dollar'}, {[styles.imgCoin]: type === 'coin'});
	let hide = classnames(styles.display, {[styles.hidden]: amount <= 0});

	return (
			<div className={hide}>
				<img src={Icon} alt="hello" className={classNamesImg}/>
				<div className={classNames}>
					{amount}
				</div>
				<span className={styles.title}>{name}</span>
				{ name !== 'pennies' ? <MinusButton amount={amount} onClickUpdateCurrencyType={onClickUpdateCurrencyType} name={name} type={type} /> : null }

			</div>
	)
};


export default AmountOfTypeDisplay;


