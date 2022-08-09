import { Box } from "components/Box";
import { Sticker } from './Sticker';
import { Component } from "react";

export class StickerList extends Component {
    state = {
        selectedSticker: null
    };

    selectSticker = img => {
        this.setState({ selectedSticker: img });
    }

    render() {
        const { selectedSticker } = this.state;
        const { stickers, onSelect } = this.props;
        
        return (
        <Box as="ul" display="flex" gridGap={4} p={2}>
            {stickers.map(( sticker , idx) => (
                <li key={idx} >
                    <Sticker
                        sticker={sticker}
                        isSelected={selectedSticker === sticker.img}
                        onSelect={onSelect}
                        onToggle={this.selectSticker}
                    />
                </li>
            ))}
        </Box>
    );
    }
   
} 

// export const StickerList = ({stickers, onSelect}) => {
//     return (
//         <Box as="ul" display="flex" gridGap={4} p={2}>
//             {stickers.map(( sticker , idx) => (
//                 <li key={idx} >
//                     <Sticker sticker={sticker}
//                         onSelect={onSelect} />
//                 </li>
//             ))}
//         </Box>
//     );
// }; 