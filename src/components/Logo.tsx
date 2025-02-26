import { Icons } from '../assets';

const Logo = () => {
    return (
        <img 
            src={Icons.Logo.src}
            alt={Icons.Logo.alt}
            className="h-10 w-auto object-contain"
        />
    )
};

export default Logo;