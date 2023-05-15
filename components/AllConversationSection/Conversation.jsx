import Image from "next/image";
import styles from "../../styles/Conversation.module.scss";

const Conversation = ({ data }) => {
  const { profileUrl, name, lastMsg, time, messageSeen } = data;
  return (
    <div className={styles.conversation__container}>
      {/* Left Container */}
      <div className={styles.left__container}>
        <Image src={profileUrl} width={60} height={60} alt="Profile" />
        <div>
          <h2>{name}</h2>
          <h4>{lastMsg}</h4>
        </div>
      </div>
      {/* Right Container */}
      <div className={styles.right__container}>
        {data.messageSeen === false ? (
          <div>
            <p>1</p>
          </div>
        ) : null}

        <p>
          {" "}
          <span>{time}</span> mins ago
        </p>
      </div>
    </div>
  );
};

export default Conversation;
