"use client"
import style from './tab.module.scss'
import { useState } from 'react';

export default function ProductTab({product}) {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }
 
    return (
        <div className={style.container}>
            <div className={style.list}>
                <nav>
                <button 
                    className={toggleState === 1 ? style.tab_active : style.tab} onClick={() => toggleTab(1)}>
                    Product Details
                </button>
                <button 
                    className={toggleState === 2 ? style.tab_active : style.tab} onClick={() => toggleTab(2)}>
                    Reviews
                </button>
                <button 
                    className={toggleState === 3 ? style.tab_active : style.tab} onClick={() => toggleTab(3)}>
                    You May Also Like
                </button>
                </nav>

            </div>

            <div className={toggleState === 1 ? style.content_active : style.content}>
                <div className={style.info}>
               <h4>Fabric:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                    <h4>Headboard:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                    <h4>Footboard:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                    <h4>Bedside:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                    <h4>Midbeam:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                    <h4>Lining:</h4>
                    <p>{product.Fabric ? product.Fabric : "No Info Added"}</p>
                </div>
            </div>
            <div className={toggleState === 2 ? style.content_active : style.content}>
            <div className={style.info}><b>Reviews</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque accumsan convallis erat, convallis sollicitudin elit egestas ac. 
                    Vestibulum finibus efficitur arcu vel fermentum. Integer gravida vestibulum 
                    efficitur. Sed id volutpat ligula. Morbi et suscipit augue, ut vehicula ante. 
                    Nullam vehicula lacus congue fringilla fermentum. Vivamus egestas a elit ut 
                    euismod.</div>
            </div>
            <div className={toggleState === 3 ? style.content_active : style.content}>
            <div className={style.info}><b>You may also like</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque accumsan convallis erat, convallis sollicitudin elit egestas ac. 
                    Vestibulum finibus efficitur arcu vel fermentum. Integer gravida vestibulum 
                    efficitur. Sed id volutpat ligula. Morbi et suscipit augue, ut vehicula ante. 
                    Nullam vehicula lacus congue fringilla fermentum. Vivamus egestas a elit ut 
                    euismod.</div>
            </div>
        </div>
    )
}