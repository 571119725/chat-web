import styles from './downloadPage.module.css';
import Carousel from '@/components/Carousel/Carousel';
function DownloadPage () {
  return (
    <div className={styles.download_page}>
      <div className={styles.carousel_container}>
        <Carousel />
      </div>
      <div className={styles.intro_and_download}>
        <div className={styles.intro_container}>
          <div className={styles.logo_and_name}>
            <div className={styles.logo}>
              <img src={require('@/assets/appLogo.png')} alt='logo'/>
            </div>
            <div className={styles.name}>
              <span>Dianbot</span>
            </div>
          </div>
          <div className={styles.description}>
            <ul>
              <li>自然语言对话机器人</li>
              <li>
                针对特定心理健康领域，稳定可用的开放式聊天机器人智能系统，能够针对特定的心理健康领域进行会话陪护，提供类似Replika的聊天体验。
              </li>
              <li>武汉热游信息技术有限公司</li>
            </ul>
          </div>
          <div className={styles.download_button_container}>
            <div className={styles.download_button}>DOWNLOAD</div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DownloadPage;