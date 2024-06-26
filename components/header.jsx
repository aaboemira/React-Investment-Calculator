import logo from '../assets/investment.png'
export default function Header(){
    return (
    <header>
        <img src={logo} alt='Logo Showing investment'/> 
        <h1>Investment Calculator</h1>
    </header>
    )
}