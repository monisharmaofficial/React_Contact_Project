import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="Logo">
            <img src="/images/Frame 2 1.png" alt="logo" />
        </div>

        <ul className="Head-item">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navigation
