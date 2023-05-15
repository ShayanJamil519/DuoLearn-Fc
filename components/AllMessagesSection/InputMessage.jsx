"use client";

import styles from "@/styles/InputMessage.module.scss";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillAudio } from "react-icons/ai";

const InputMessage = () => {
  return (
    <div className={styles.input__message__container}>
      {/* Input Message */}
      <div className={styles.input__message}>
        <div>
          <BsFillEmojiSmileFill />
        </div>
        <div>
          <input type="text" placeholder="Type Your Message Here..." />
        </div>
        <RiSendPlane2Fill />
      </div>
      {/* Volume */}
      <div className={styles.volume}>
        <AiFillAudio />
      </div>
    </div>
  );
};

export default InputMessage;
