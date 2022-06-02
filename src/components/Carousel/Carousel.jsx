import { useEffect, useState } from 'react';
import styles from './carousel.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './animation.css';
function Carousel () {
  const imgs = [
    require('@/assets/R_1.jpg'),
    require('@/assets/R_2.jpg'),
    require('@/assets/R_3.jpg'),
  ];
  const [showIndex, setShowIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const showImg = (
    <CSSTransition 
      timeout={500} 
      classNames={'change'} 
      unmountOnExit={true}
      key={showIndex}>
      <div className={styles.show_img}>
        <img src={imgs.filter((value,index) =>  index === showIndex)} alt='carousel'/>
      </div>
    </CSSTransition>);
  const startCount = () => {
    let temp = timer;
    temp= setInterval(() => {
      nextCount();
    },4000);
    setTimer(temp);
  };
  const nextCount = () => {
    let index = showIndex;
    if(index >= imgs.length - 1){
      index = 0
    }else {
      index++;
    };
    setShowIndex(index);
  };
  const stopCount = () => {
    let temp = timer;
    clearInterval(temp);
  };
  const changeIndex =(index) => {
    setShowIndex(index);
  };
  useEffect(
    () => {
      startCount();
      return stopCount();
    },[showIndex]
  );
  return (
    <div className={styles.carousel}>
      <div 
        className={styles.img_container}
        onMouseOver={() => stopCount()}
        onMouseLeave={() => startCount()}>
        <TransitionGroup>
        {showImg}
        </TransitionGroup>
      </div>
      <div className={styles.num_choose_box}>
        {
          imgs.map(
            (value,index) => {
              return (
                <div 
                  onClick={() => changeIndex(index)}
                  key={index} 
                  className={index === showIndex ? styles.single_dot_active:styles.single_dot}></div>
              )
            }
          )
        }
      </div>
    </div>
  )
};
export default Carousel;