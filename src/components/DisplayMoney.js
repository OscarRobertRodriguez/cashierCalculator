import AmountOfTypeDisplay from "./AmountOfTypeDisplay";
import hundredDollarSvg from './../svgs/2214017 - bill money one hund.svg';
import twentySvg from './../svgs/2214021 - bill dollars twenty.svg';
import tenDollarSvg from './../svgs/2214044 - bill money ten ten .svg';
import fiveDollarSvg from './../svgs/2214030 - cuurency five five .svg';
import oneDollarSvg from './../svgs/2214040 - bill money one one .svg';
import quarterSvg from './../svgs/2214018 - coin money twenty f.svg';
import dimeSvg from './../svgs/2214039 - coin money ten ten .svg';
import nickelSvg from './../svgs/2214036 - coin five five cent.svg';
import pennySvg from './../svgs/2214048 - coin money one one .svg';


const DisplayMoney = ({dollarType, coinType, onClickUpdateCurrencyType}) => {
	return (
			<>
				<AmountOfTypeDisplay amount={dollarType.hundred} Icon={hundredDollarSvg} name={'hundred'}
				                     type={'dollar'} onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={dollarType.twenty} Icon={twentySvg} name={'twenty'}
				                     type={'dollar'} onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={dollarType.ten} Icon={tenDollarSvg} name={'ten'} type={'dollar'}
				                     onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={dollarType.five} Icon={fiveDollarSvg} name={'five'}
				                     type={'dollar'} onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={dollarType.one} Icon={oneDollarSvg} name={'one'} type={'dollar'}
				                     onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={coinType.quarters} Icon={quarterSvg} name={'quarters'}
				                     type={'coin'} onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={coinType.dimes} Icon={dimeSvg} name={'dimes'} type={'coin'}
				                     onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={coinType.nickels} Icon={nickelSvg} name={'nickels'} type={'coin'}
				                     onClickUpdateCurrencyType={onClickUpdateCurrencyType}/>
				<AmountOfTypeDisplay amount={coinType.pennies} Icon={pennySvg} name={'pennies'} type={'coin'} />
			</>
	)


}


export default DisplayMoney;
