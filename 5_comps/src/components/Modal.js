import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {

    useEffect(() => {
        // Added tailwind css class name overflow-hidden 
        document.body.classList.add('overflow-hidden');
        // return is cleanUp fn when comp collapses it gets called.   my name is sansrit paduel
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    return ReactDOM.createPortal(
        // {/* // Returns Jsx as first arg */ }
        < div >
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>

                </div>
            </div>
        </div >,
        //  2nd arg will be reference to the index.html element
        document.querySelector('.modal-container')

    );
}

export default Modal; 