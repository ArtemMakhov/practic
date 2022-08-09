import { Box } from 'components/Box';
import { Menu, Button } from './Dropdown.styled';

const { Component } = require("react");


class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    render() {
        return (
            <Box
                position="relative"
                width="400px"
                p="20px"
                border="1px solid black"
            >
                <Button type='button' onClick={this.toggle}>
                    {this.state.visible ? 'Hide' : 'Show'}
                </Button>
               

                {this.state.visible && (
                     <Menu>Выпадающее меню</Menu>
               )}
            </Box>
            

        );
    }
}

export default Dropdown;