import { Icons } from '../assets';

const Logo = () => {
    return (
        <img 
            src={Icons.Logo.src}
            alt={Icons.Logo.alt}
            className="h-auto max-w-[131px] object-contain"
        />
    )
};

export default Logo;