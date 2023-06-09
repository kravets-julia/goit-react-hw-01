import PropTypes from 'prop-types';

export const Transaction = ({ item: {type, amount, currency}}) => {
    return (
        <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </>
    )
}


Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired, 
}