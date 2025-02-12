import style from "./products.module.scss";
import SectionHeader from "@/app/components/common/sectionheader";

export default function Products() {
  return (
    <section className="main-sections">
      <div className={style.products}>
        <SectionHeader title="Products" url="" />

        <div className={style.category}>
          <div className={style.category_one}>
            <div className={style.title}>
              <h1>Beds</h1>
            </div>
          </div>

          <div className={style.category_two}>
            <div className={style.title}>
              <h1>Chairs</h1>
            </div>
          </div>

          <div className={style.category_three}>
            <div className={style.title}>
              <h1>Sofa</h1>
            </div>
          </div>

          <div className={style.category_four}>
            <div className={style.title}>
              <h1>Cabinets</h1>
            </div>
          </div>

          <div className={style.category_five}>
            <div className={style.title}>
              <h1>Table</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}