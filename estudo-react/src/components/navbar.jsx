export default function Navbar(){
    return (
    <nav className='menu'>
        <a href= '/'>home page </a>
        <ul>
            <li className='active'>
            <a href= '/about'>sobre</a></li>
            <li>
            <a href= '/profile'>perfil</a>
            </li>
        </ul>
    </nav>
    )
}