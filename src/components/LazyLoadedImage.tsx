import styles from './Home.module.css';

const LazyLoadedImage = () => {
  return <img className={styles.maskGroupIcon} alt="" src="my-img.jpg" />;
};

export default LazyLoadedImage;
