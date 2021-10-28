import headClass from './Header.module.css';

function Header() {
  return (
    <header className={headClass.header}>
      <div className={headClass.header__container}>
        <div className={headClass.header__logo}>
          <img 
          className={headClass.logo}
          src="https://cdn-icons-png.flaticon.com/512/5547/5547473.png" 
          alt="logo"/>
        </div>
        <div className={headClass.header__title}>
          <h1>Social network</h1>
        </div>
        
      </div>
    </header>
  );
}

export default Header;