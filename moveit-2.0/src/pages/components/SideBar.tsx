import Link from 'next/link';
import styles from '../../styles/components/SideBar.module.css';

export function SideBar() {
  const handleLinkColor = () => {
    
  }

  return (
    <div className={styles.sideBarContainer}>
      <header>
        <img src="/icons/logo.svg" alt=""/>
      </header>

      <div>
        <Link href="home">
          <a onClick={handleLinkColor}>
            <img src="/icons/home.svg" alt="Página Inicial"  />
          </a>
        </Link>
        <Link href="/rank">
          <a onClick={handleLinkColor}>
            <img src="/icons/award.svg" alt="Página de Rankings" />
          </a>
        </Link>
      </div>
    </div>
  )
}