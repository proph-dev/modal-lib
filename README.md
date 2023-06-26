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
const [showModal, setShowModal] = useState(false);
```
Add the "showModal" props, which takes the state:
```javascript
<Modal
  showModal={ showModal }
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
  setShowModal(false);
};
```
Now add the "onClose" props calling your handle in the modal component, for example:
```javascript
<Modal
  onClose={ handleCloseModal }
  showModal={ showModal }
>
  ...
</Modal>
```
The onClose props is mandatory within the modal, so you need to add it.
However, you'll need to add options to display the modal's closing cross or a text of your choice, please see the options below.


## Options
`escapeClose: true` : Allows the user to close the modal by pressing `ESC`

`clickClose: true` : Allows the user to close the modal by clicking the overlay

`closeText: 'Close'` : Text content of the button to close the modal

`closeClass: ''` : Add custom classes to the close modal button

`showClose: true` : Displays an icon (X) in the upper right-hand corner

`modalClass: 'customModal'` : CSS class added to the element being displayed in the modal.

`blockerClass: 'customOverlayModal'` : CSS class added to the overlay (blocker).


## Example
```javascript
import { useState } from 'react';
import { Modal } from 'lib-modal/lib/modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenedModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenedModal}>
        Click to open the modal
      </button>


      <Modal
        onClose={ handleCloseModal }
        showModal={ showModal }
        modalClass="modalContent"
        closeText='Fermer'
        closeClass="close"
        escapeClose
      >
        <p>Add your modal content here</p>
      </Modal>
    </>
  )
}
```


## Author
- [Proph](https://github.com/proph-dev)


## License
[MIT](https://choosealicense.com/licenses/mit/)