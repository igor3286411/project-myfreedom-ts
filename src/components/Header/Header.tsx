import './header.scss'
export const Header = () => {
  return (
    <section className='header'>
      <div className='header__left'>
        <a href="/">BitTest</a>
        <div className='header__left-org'>
          <img src="../../../public/images/organization.svg" alt="img" />
          <p>Моя организация</p>
        </div>
      </div>
      <div className='header__right'>
        <img src="../../../public/images/vector.svg" alt="img" />
        <p>Вы авторизованы <span>Администратор</span></p>
      </div>
    </section>
  );
};
