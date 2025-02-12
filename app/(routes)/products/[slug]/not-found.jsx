import style from '@/app/notfound.module.scss'

export default function NotFound() {
  return (
    <div className={style.page}>
      <h2>404</h2>
      <p>Product not found</p>
    </div>
  )
}