// import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

import { Component } from 'react';
import { StickerList } from './StickerList/StickerList';
import stickers from './stickers.json';

export class App extends Component {
  state = {
    selectedStickerLabel: null,
  }

  selectStickerLabel = label => {
    this.setState({ 
     selectedStickerLabel: label, 
   })
  };

  render() {
    return (
      <>
        <h1>{this.state.selectedStickerLabel}</h1>
        <StickerList stickers={stickers}
          onSelect={this.selectStickerLabel } />
        <GlobalStyle/>
      </>
    )
  }
}






// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './ColorPicker/ColorPicker';

// const clorPickerOptions = [
//   { label: 'red', color: 'F44336' },
//   { label: 'green', color: '4CAF50' },
//   { label: 'blue', color: '2196F3' },
//   { label: 'grey', color: '607D8B' },
//   { label: 'pink', color: 'E91E63' },
//   {label: 'indigo', color: '3F51B5'},
// ]

// export const App = () => {
//   return (
// <>
//       <Box>
//         <StickerList stickers={stickers} />
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={clorPickerOptions} /> */}
//   </Box>
//   <GlobalStyle/>
// </>
//      );
// };

// export default App;

