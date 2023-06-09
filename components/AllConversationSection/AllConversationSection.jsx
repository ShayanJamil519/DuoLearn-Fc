import styles from "@/styles/AllConversationSection.module.scss";
import Conversation from "./Conversation";
import { BsSearch } from "react-icons/bs";
import { dummyConversationData } from "@/dummyData";

const AllConversationSection = ({ handleClick }) => {
  return (
    <div className={styles.all__conversations__container}>
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
