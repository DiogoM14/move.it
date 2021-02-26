import styles from '../../styles/components/SideBar.module.css';

export function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <header>
        <img src="/icons/logo.svg" alt=""/>
      </header>

      <div>
        <button>
          <img src="/icons/home.svg" alt="Página Inicial"/>
        </button>
        <button>
          <img src="/icons/award.svg" alt="Página de Rankings"/>
        </button>
      </div>
    </div>
  )
}