import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept </Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        // <div className='relative'>
        <div >
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {/* shows first false value:blank and last truty value when clicked */}
            {showModal && modal}
        </div>
    );
}

export default ModalPage;
