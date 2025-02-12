import style from './sectionheader.module.scss'
import Link from 'next/link'

export default function SectionHeader({title , url}) {

  return (
    <div className={style.section_title}>
      <h1 className={style.title}>{title}</h1>
        {url ? <Link href={"/" + url}>View more</Link> : ""}
    </div>
  )
}
