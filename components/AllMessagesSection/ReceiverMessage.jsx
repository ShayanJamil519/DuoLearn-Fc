import styles from "../../styles/ReceiverMessage.module.scss";

const ReceiverMessage = ({ message, profileIcon }) => {
  return (
    <div className={styles.receiver__message}>
      <div>
        <img
          src={profileIcon}
          alt="Receiver Profile"
          className={styles.profile__icon}
        />
        <p>Feb 09,2023, 5:05 AM</p>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default ReceiverMessage;
