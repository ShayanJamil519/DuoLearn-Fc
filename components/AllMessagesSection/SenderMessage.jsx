import styles from "../../styles/SenderMessage.module.scss";

const SenderMessage = ({ message, profileIcon }) => {
  return (
    <div className={styles.sender__message}>
      <div>
        <img
          src={profileIcon}
          alt="Sender Profile"
          className={styles.profile__icon}
        />
        <p>Feb 09,2023, 5:05 AM</p>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default SenderMessage;
