import styles from './downloadPage.module.css';
import Carousel from '@/components/Carousel/Carousel';
function DownloadPage () {
  return (
    <div className={styles.download_page}>
      <div className={styles.carousel_container}>
        <Carousel />
      </div>
      <div className={styles.intro_and_download}>aa</div>
    </div>
  )
};
export default DownloadPage;