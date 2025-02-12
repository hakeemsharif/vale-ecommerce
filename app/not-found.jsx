import style from './notfound.module.scss'
export default function NotFound() {
  return (
    <div className={style.page}>
      <h2>404</h2>
      <p>Page not found</p>
    </div>
  )
}