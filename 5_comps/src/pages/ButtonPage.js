import Button from '../components/Button';
// import {iconName} from 'react-icons/go';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        // console.log('Click!!');
    }

    return (
        <div>
            <div>
                {/* here onClick is builtin handler */}
                <Button secondary rounded outline onClick={handleClick} className="mb-5">
                    {/* to display icon we use here as component */}
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                {/* Here onMouseEnter is builtin Handler */}
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
