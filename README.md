A simple & lightweight method of displaying modal windows with React in TypeScript


## Table of Contents
 - [Installation](https://www.npmjs.com/package/lib-modal#installation)
 - [Import](https://www.npmjs.com/package/lib-modal#import)
 - [Opened](https://www.npmjs.com/package/lib-modal#opened)
 - [Closed](https://www.npmjs.com/package/lib-modal#closed)
 - [Options](https://www.npmjs.com/package/lib-modal#options)
 - [Example](https://www.npmjs.com/package/lib-modal#examples)


## Installation
You can install lib-modal with npm:

`npm install lib-modal`


## Import
Import the modal with this line:

`import { Modal } from 'lib-modal/lib/modal';`


## Opened
To open and close the modal, please add a state:
```javascript
const [isOpen, setIsOpen] = useState(false);
```
Add the "isOpen" props, which takes the state:
```javascript
<Modal
  isOpen={ isOpen }
>
  ...
</Modal>
```
To display or close the modal, simply change the status value between true or false.


## Closed
The modal can also be closed from the inside, for example by pressing a "close" button or a cross.

Please add a handle:
```javascript
const handleCloseModal = () => {
  setIsOpen(false);
};
```
Now add the "onClose" props calling your handle in the modal component, for example:
```javascript
<Modal
  onClose={ handleCloseModal }
  isOpen={ isOpen }
>
  ...
</Modal>
```
The onClose props is mandatory within the modal, so you need to add it.
However, you'll need to add options to display the modal's closing cross or a text of your choice, please see the options below.


## Options
`escapeClose: true` : Allows the user to close the modal by pressing `ESC` (default: false)

`clickClose: true` : Allows the user to close the modal by clicking the overlay (default: false)

`closeText: 'Close'` : Text content of the button to close the modal

`closeClass: 'customClose'` : Add custom classes to the close modal button

`showCloseIcon: true` : Displays an icon (X) in the upper right-hand corner (default: false)

`modalClass: 'customModal'` : CSS class added to the element being displayed in the modal.

`overlayClass: 'customOverlayModal'` : CSS class added to the overlay.

`width: 500px` : Modifies modal width (default: 500px)

`height: auto` : Modifies modal height (default: auto)

`borderRadius: 10px` : Modifies the border radius of your modal (default: 15px)

`overlayOpacity: 5` : Modifies the opacity of your modal overlay between 0 and 10 (default: 6)


## Example
```javascript
import { useState } from 'react';
import { Modal } from 'lib-modal/lib/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenedModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenedModal}>
        Click to open the modal
      </button>


      <Modal
        onClose={ handleCloseModal }
        isOpen={ isOpen }
        modalClass="modalContent"
        closeText='Fermer'
        closeClass="close"
        width={400px}
        borderRadius={20px}
        overlayOpacity={5}
        escapeClose
      >
        <h1>The title of your modal</h1>
        <p>Add your modal content here</p>
      </Modal>
    </>
  )
}

export default App;
```


## Author
- [Proph](https://github.com/proph-dev)


## License
[MIT](https://choosealicense.com/licenses/mit/)