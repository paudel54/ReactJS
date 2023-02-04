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

    return (
        // <div className='relative'>
        <div >
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {/* shows first false value:blank and last truty value when clicked */}
            {showModal && <Modal onClose={handleClose} />}
        </div>
    );
}

export default ModalPage;
