import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <p className={styles.getInTouchDescription}>
        If you want us to work together, have any question or want me to speak
        at your event, my inbox is always open. Whether just want to say hi,
        I'll try my best to get back to you! Cheers!
      </p>

      <button
        className={styles.getInTouchButton}
        onClick={() => {
          window.location.href = "mailto:bohdan.ilienko.work@gmail.com";
        }}
      >
        Say Hello
      </button>
    </div>
  );
};

export default GetInTouch;
