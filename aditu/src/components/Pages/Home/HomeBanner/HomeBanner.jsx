import React from 'react'
import styles from './homebanner.module.scss';
import BannerImg from '../../../images/01.jpg'
const HomeBanner = () => {
  return (
    <main>
      <section className={styles.img_container}>
        <div className='container mt-4'>
          <div className="row ">
            <div className="col-lg-12">
              <div className={styles.img_box}>
                <img src={BannerImg} alt="" className={styles.banner_img} />
                <div className={styles.text_box}>
                  <h2>Aditu</h2>
                  <p>Thoughts, stories and ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id={styles.item_cards}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>

      </section>
    </main>

  )
}

export default HomeBanner