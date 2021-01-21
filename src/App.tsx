import React, {useState, useEffect} from 'react';
import styles from './styles/App.module.scss';
import register from './svgs/register.svg';
import cashier from './svgs/cashier-svgrepo-com.svg';
import DisplayMoney from "./components/DisplayMoney";


function App() {
    const [value, setValue] = useState<string>('0');
    const [dollars, setDollars] = useState<number>(0);
    const [cents, setCents] = useState<number>(0);
    const [centsTotal, setCentsTotal] = useState<number>(0);
    const [dollarsTotal, setDollarsTotal] = useState<number>(0);

    interface coinTypeI {
        quarters: number,
        dimes: number,
        nickels: number,
        pennies: number,
    }

    interface dollarTypeI {
        hundred: number,
        twenty: number,
        ten: number,
        five: number,
        one: number
    }


    const [coinType, setCoinType] = useState<coinTypeI>({
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    })


    const [dollarType, setDollarType] = useState<dollarTypeI>({
        hundred: 0,
        twenty: 0,
        ten: 0,
        five: 0,
        one: 0
    })


    useEffect(() => {
        let timer = setTimeout(() => {

            spitDollarsAndCents(value);

        }, 100)

        return () => {
            clearTimeout(timer);
            setCoinType({quarters: 0, dimes: 0, nickels: 0, pennies: 0});
            setDollarType({hundred: 0, twenty: 0, ten: 0, five: 0, one: 0});
        }


    }, [value]);




    useEffect(() => {
        const convertToCoins = () => {

            if (centsTotal / 25 >= 1) {
                let [quartersTotal] = (String(cents / 25)).split('.');
                setCoinType({...coinType, quarters: +quartersTotal});
                let total: number;
                total = 25 * +quartersTotal;
                setCentsTotal(cents - total);
            } else if (centsTotal / 10 >= 1) {
                let [dimesTotal] = (String(centsTotal / 10)).split('.');
                setCoinType({...coinType, dimes: +dimesTotal});
                let total: number;
                total = 10 * +dimesTotal;
                setCentsTotal(centsTotal - total);
            } else if (centsTotal / 5 >= 1) {
                let [nickelsTotal] = (String(centsTotal / 5)).split('.');
                setCoinType({...coinType, nickels: +nickelsTotal});
                let total: number;
                total = 5 * +nickelsTotal;
                setCentsTotal(centsTotal - total);
            } else if (centsTotal >= 1) {

                let [penniesTotal] = (String(centsTotal)).split('.');
                setCoinType({...coinType, pennies: +penniesTotal});
                let total: number;
                total = +penniesTotal;
                setCentsTotal(centsTotal - total);
            }

        }

        const convertToDollars = () => {

            if (dollarsTotal / 100 >= 1) {
                let [hundredTotal] = (String(dollars / 100)).split('.');
                setDollarType({...dollarType, hundred: +hundredTotal});
                let total: number;
                total = 100 * +hundredTotal;
                setDollarsTotal(dollars - total);
            } else if (dollarsTotal / 20 >= 1) {
                let [twentyTotal] = (String(dollarsTotal / 20)).split('.');
                setDollarType({...dollarType, twenty: +twentyTotal});
                let total: number;
                total = 20 * +twentyTotal;
                setDollarsTotal(dollarsTotal - total);
            } else if (dollarsTotal / 10 >= 1) {
                let [tenTotal] = (String(dollarsTotal / 10)).split('.');
                setDollarType({...dollarType, ten: +tenTotal});
                let total: number;
                total = 10 * +tenTotal;
                setDollarsTotal(dollarsTotal - total);
            } else if (dollarsTotal / 5 >= 1) {
                let [fiveTotal] = (String(dollarsTotal / 5)).split('.');
                setDollarType({...dollarType, five: +fiveTotal});
                let total: number;
                total = 5 * +fiveTotal;
                setDollarsTotal(dollarsTotal - total);
            } else if (dollarsTotal >= 1) {
                let [oneTotal] = (String(dollarsTotal)).split('.');
                setDollarType({...dollarType, one: +oneTotal});
                let total: number;
                total = +oneTotal;
                setDollarsTotal(dollarsTotal - total);
            }
        }

        convertToDollars();
        convertToCoins();

    }, [centsTotal, setCentsTotal, dollarsTotal, setDollarsTotal, cents, coinType, dollarType, dollars])


    const spitDollarsAndCents = (string: string) => {
        let [dollars, centsValue] = string.split('.');
        setDollars(+dollars);
        setCents(+centsValue);
        setCentsTotal(+centsValue);
        setDollarsTotal(+dollars);

    }

    const onHandleInputChange = (e: any) => {
        let regex = /^(\d+)?([.]?\d{0,2})?$/;
        let value = e.target.value;
        if (value === "" || regex.test(value)) {
            setValue(value);
        }
    };


    const onClickUpdateCurrencyType = (amount:number , name:string, type:string) => {
        if(type === 'dollar') {
            if (name === 'hundred') {
                setDollarType({...dollarType, hundred: amount - 1, twenty: dollarType.twenty + 5 });
            }
            if (name === 'twenty') {
                setDollarType({...dollarType, twenty: amount - 1, ten: dollarType.ten + 2 });
            }
            if (name === 'ten') {
                setDollarType({...dollarType, ten: amount - 1, five: dollarType.five + 2});
            }
            if (name === 'five') {
                setDollarType({...dollarType, five: amount - 1, one: dollarType.one + 5});
            }
            if (name === 'one') {
                setDollarType({...dollarType, one: amount - 1});
                setCoinType({...coinType, quarters: coinType.quarters + 4 });
            }

        }

        if(type === 'coin') {
            if (name === 'quarters') {
                setCoinType({...coinType, quarters: amount - 1, dimes: coinType.dimes + 2 , nickels: coinType.nickels + 1});
            }
            if (name === 'dimes') {
                setCoinType({...coinType, dimes: amount - 1, nickels: coinType.nickels + 2 });
            }
            if (name === 'nickels') {
                setCoinType({...coinType, nickels: amount - 1, pennies: coinType.pennies + 5});
            }

        }
    }


    return (

        <div className={styles.app}>
            <header className={styles.header}>
                <h2>cashier <img src={register} alt={'cashier'} /> calculator</h2>
            </header>
            <input className={styles.input} type='number' pattern="^\d*(\.\d{0,2})?$"
                   onChange={e => onHandleInputChange(e)} value={value}/>

            <div className={styles.displayTypeContainer}>


                { +value === 0 ? <img src={cashier} className={styles.cashier} alt="hello"/> : <DisplayMoney dollarType={dollarType} coinType={coinType} onClickUpdateCurrencyType={onClickUpdateCurrencyType} /> }

            </div>

            <footer className={styles.footer}>created by oscar</footer>
        </div>
    );
}

export default App;



