import Header from "@/components/Header";
import styles from "./page.module.scss";
import AllConversationSection from "@/components/AllConversationSection/AllConversationSection";
import AllMessagesSection from "@/components/AllMessagesSection/AllMessagesSection";

export default function Chat() {
  return (
    <div className={styles.chat__container}>
      {/* Header Component */}
      <Header />
      {/* Chat Body */}
      <div className={styles.chat__body}>
        <AllConversationSection />
        <AllMessagesSection />
      </div>
    </div>
  );
}
