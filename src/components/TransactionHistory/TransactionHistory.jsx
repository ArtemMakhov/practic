import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TableHead, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
    <Box width={1/3} as="table" m="auto" border="normal">
        <TableHead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TableHead>
        
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <Row key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </Row>
            ))}
        </tbody>
    </Box>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};