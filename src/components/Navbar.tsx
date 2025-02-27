const Navbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex gap-2">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                    <li key={item} className="px-8 py-3 font-poppins font-semibold text-[16px] leading-6 tracking-widest transition-colors duration-200 hover:text-custom-blue active:text-custom-blue">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar;