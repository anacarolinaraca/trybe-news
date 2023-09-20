import iconTrybe from '../../images/icon.svg'
import style from './Header.module.css'
function Header() {
  return (
    <div className={style.containerHeader}>
      <img className={style.iconHeaderTrybe} src={iconTrybe} alt="Icon Trybe" />
      <h1 className={style.titleHeaderTrybe}>TRYBE NEWS</h1>
    </div>
  )
}

export default Header;