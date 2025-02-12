import style from './newsletter.module.scss'

export default function NewsLetter() {
  return (
    <section className={style.section}>
        <div className={style.newsletter}>
            <div className={style.nl_left}>
                <h1>Subscribe to our newsletter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam ac eros  diam. Sed justo velit, tempor fermentum commodo at, 
                    pulvinar nec elit.  Nam cursus eu purus sit amet pharetra. 
                    Nam sit amet lorem tellus.</p>
            </div>

            <div className={style.nl_right}>
                <form action="">
                    <input type="email" id="emails" name="emails" placeholder='Enter your email' /> 
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    </section>
  )
}
