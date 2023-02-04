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

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum neque tempora molestias inventore nostrum officia voluptatibus a nisi fugit impedit, exercitationem rerum saepe hic repellat assumenda magni, unde nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci velit tempora ducimus quas blanditiis, explicabo fugit omnis optio iste corporis ad ipsum iure tenetur architecto similique, voluptatibus cum excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aliquam tempore consequuntur architecto sunt culpa ut qui, aperiam earum illo. Iusto dolores quaerat recusandae ipsum officia exercitationem suscipit non voluptate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora tenetur? Perferendis facilis voluptatum libero quam, velit impedit ex quae dolorem temporibus animi delectus assumenda! Veritatis qui ab magnam sunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio, porro sunt voluptas quam explicabo a adipisci placeat saepe repellat, dolorem sapiente temporibus quisquam, suscipit quas fugiat aliquid deleniti hic?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est praesentium animi voluptate, ex, mollitia tenetur cumque placeat itaque incidunt, sint a modi sequi quo! Voluptates sapiente nulla quae voluptatem mollitia.
            </p>
        </div>
    );
}

export default ModalPage;
