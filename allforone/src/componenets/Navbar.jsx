const Navbar = () => {
    return ( 
        <nav className="navbar flex justify-around items-center h-24 text-white bg-transparetnt">
            <h1 className="Logo text-5xl font-bold text-cyan-700">AllForOne</h1>
            <ul className="flex justify-between">
                <li><a href="./Navbar.jsx" className="p-7 text-xl">Services</a>
                <ul className="absolute">
                    <li className="pt-8"><a href="./Navbar.jsx" className="text-xl">Property Management</a></li>
                    <li className="pt-8"><a href="./Navbar.jsx" className="text-xl">Booking Engine</a></li>
                    <li className="pt-8"><a href="./Navbar.jsx" className="text-xl">Revenue Management</a></li>
                    <li className="pt-8"><a href="./Navbar.jsx" className="text-xl">Advertising</a></li>
                </ul>
                </li>
                <li><a href="./Navbar.jsx" className="p-7 text-xl">Pricing</a></li>
                <li><a href="./Navbar.jsx" className="p-7 text-xl">Company</a></li>
            </ul>
            <ul className="flex justify-between">
            <li><a href="./Navbar.jsx" className="p-7 text-xl">Register</a></li>
            <li><a href="./Navbar.jsx" className="p-7 text-xl">Login</a></li>
            </ul>    
        </nav>
     );
}
 
export default Navbar;