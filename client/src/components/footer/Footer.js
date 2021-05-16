function Footer() {
    return (
        <footer className="pb-60  pt-70 pos-relative">
            <div className="pos-top triangle-bottom"/>
            <div className="container-fluid">
                <a href="index.html">
                    <div className="ïmg-200x mlr-auto pos-relative">
                        <img src="images/logo.png" alt=""/>
                    </div>
                </a>

                <div className="pt-30">
                    <p className="underline-secondary"><b>Адрес:</b></p>
                    <p>Волжское шоссе 121</p>
                </div>

                <div className="pt-30">
                    <p className="underline-secondary mb-10"><b>Телефон</b></p>
                    <a href="tel:+53 345 7953 32453 ">8(846)-253-14-17 </a>
                </div>

                <div className="pt-30">
                    <p className="underline-secondary mb-10"><b>Email:</b></p>
                    <a href="mailto:yourmail@gmail.com"> giraffefood@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;