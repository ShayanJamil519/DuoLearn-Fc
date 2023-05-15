import styles from "../../styles/AllConversationSection.module.scss";
import { BsSearch } from "react-icons/bs";
import Conversation from "./Conversation";
import { dummyConversationData } from "@/dummyData";

const AllConversationSection = ({ handleClick, isOpen, isMobile }) => {
  // let customStyle = isMobile && {
  //   display: isOpen ? "none" : "",
  // };

  let customStyle = isMobile && {
    display: isOpen ? "none" : "",
  };

  return (
    <div className={styles.all__conversations__container} style={customStyle}>
      {/* Header */}
      <div className={styles.conversation__header}>
        <h1>All Conversations</h1>
        <BsSearch />
      </div>
      {/* Conversations */}

      <div className={styles.conversation__scroll}>
        {dummyConversationData.map((data, i) => (
          <Conversation key={i} data={data} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default AllConversationSection;
