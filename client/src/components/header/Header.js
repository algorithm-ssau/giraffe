import logo from './logo.png';


const Header = () => {

    return (
        <div className="Header">
            <header className="App-header">
                <div className="container">
                    <a className="logo" href="#"><img src= {logo} alt="Logo"/></a>
                    <div className="right-area">
                        <h6><a className="plr-20 color-white btn-fill-primary" href="#">Заказать: 8 (846)-253-14-17</a>
                        </h6>
                    </div>
                    <a className="menu-nav-icon" data-menu="#main-menu" href="#"><i className="ion-navicon"/></a>
                    <ul className="main-menu font-mountainsre" id="main-menu">

                        <li><a href="index.html">Главная</a></li>
                        <li><a href="menu.html">Меню</a></li>
                        <li><a href="about.html">О нас</a></li>
                    </ul>
                    <div className="clearfix"/>
                </div>
            </header>
        </div>
    );
}
export default Header;
