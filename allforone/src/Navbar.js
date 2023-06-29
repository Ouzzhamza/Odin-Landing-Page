const Navbar = () => {
    return ( 
        <nav className="navbar bg-blue-700 opacity-2 ds">
            <h1>AllForOne</h1>
            <div className="links">
                <ul>
                    <li> <a href="./App.js">Home</a></li>
                    <li> <a href="./App.js">Services</a>
                    <ul>
                        <li><a href="./App.js">Booking</a></li>
                        <li><a href="./App.js">Managing</a></li>
                        <li><a href="./App.js">Advertising</a></li>
                    </ul>
                    </li>
                    <li> <a href="./App.js">Contact us</a></li>
                    <li> <a href="./App.js">Rgister</a></li>
                    <li> <a href="./App.js">Sign in</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;