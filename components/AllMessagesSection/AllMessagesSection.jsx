import Image from "next/image";
import styles from "../../styles/AllMessagesSection.module.scss";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdDelete, MdMoreVert, MdOutlineArrowBackIosNew } from "react-icons/md";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
import InputMessage from "./InputMessage";

const AllMessagesSection = ({ handleClick, isOpen, isMobile }) => {
  return (
    <div
      className={styles.all__messages__container}
      style={{
        display: isOpen && isMobile ? "" : "none",
      }}
    >
      {/* Header */}
      <div className={styles.all__messages__header}>
        {/* Left Container */}
        <div className={styles.left__container}>
          <MdOutlineArrowBackIosNew onClick={handleClick} />
          <Image
            src={"/assets/profile.png"}
            width={60}
            height={60}
            alt="Profile"
          />
          <div>
            <h2>Wajid Ullah</h2>
            <h4>last Online : 2 min Ago</h4>
          </div>
        </div>

        {/* Right Container */}
        <div className={styles.right__container}>
          <BsFillCameraVideoFill />
          <MdDelete />
          <MdMoreVert />
        </div>
      </div>

      {/* Messages Body */}

      <div className={styles.messages__body}>
        <SenderMessage message="Hi there!" profileIcon="/assets/profile.png" />
        <ReceiverMessage
          message="Hey! How are you?"
          profileIcon="/assets/profile2.png"
        />
        <SenderMessage
          message="I'm doing great, thanks for asking!"
          profileIcon="/assets/profile.png"
        />
        <ReceiverMessage
          message="That's great to hear!"
          profileIcon="/assets/profile2.png"
        />
        {/* =============== */}
        <SenderMessage message="Hi there!" profileIcon="/assets/profile.png" />
        <ReceiverMessage
          message="Hey! How are you?"
          profileIcon="/assets/profile2.png"
        />
        <SenderMessage
          message="I'm doing great, thanks for asking!"
          profileIcon="/assets/profile.png"
        />
        <ReceiverMessage
          message="That's great to hear!"
          profileIcon="/assets/profile2.png"
        />
        {/* =============== */}
        <SenderMessage message="Hi there!" profileIcon="/assets/profile.png" />
        <ReceiverMessage
          message="Hey! How are you?"
          profileIcon="/assets/profile2.png"
        />
        <SenderMessage
          message="I'm doing great, thanks for asking!"
          profileIcon="/assets/profile.png"
        />
        <ReceiverMessage
          message="That's great to hear!"
          profileIcon="/assets/profile2.png"
        />
      </div>
      {/* Input Message Container */}
      <InputMessage />
    </div>
  );
};

export default AllMessagesSection;
