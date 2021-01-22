
import styled from 'styled-components';




const MinusButton = ({amount ,onClickUpdateCurrencyType, name, type}) => {


	return (
			<Button type={type} onClick={() => { onClickUpdateCurrencyType( amount, name, type )}}>
				-
			</Button>
	)
};


export default MinusButton;


const Button = styled.button`
	
  font-size: 2rem;
  border-radius: 5px;
  padding: 1px 15px;
  position: absolute;
  bottom: 70px;
  right: ${props => props.type === 'dollar' ? 0 : 40}px ;
  justify-self: end;
  cursor: pointer;
  outline: none;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .5);
  transition: all .2s ease;
  z-index: 99;


  &:active {
    box-shadow: none;
  }
	
	@media screen and (max-width: 500px ) {
		padding: 5px 15px;
		font-size: 1.5rem;
} 
	
`;


