import styles from './Header.module.css'

import todoLogo from '../../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={todoLogo} alt="Logo do aplicativo todo list" />
      </div>
    </header>
  )
}