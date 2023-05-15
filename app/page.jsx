"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import AllConversationSection from "@/components/AllConversationSection/AllConversationSection";
import AllMessagesSection from "@/components/AllMessagesSection/AllMessagesSection";
import AllConversationSectionMobile from "@/components/AllConversationSection/AllConversationSectionMobile";
import AllMessagesSectionMobile from "@/components/AllMessagesSection/AllMessagesSectionMobile";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chat__container}>
      {/* Header Component */}
      <Header />
      {/* Chat Body */}
      <div className={styles.chat__body}>
        {!isMobile ? (
          <>
            <AllConversationSection handleClick={handleClick} />
            <AllMessagesSection handleClick={handleClick} />
          </>
        ) : (
          <>
            <AllConversationSectionMobile
              handleClick={handleClick}
              isOpen={isOpen}
            />
            <AllMessagesSectionMobile
              handleClick={handleClick}
              isOpen={isOpen}
            />
          </>
        )}
      </div>
    </div>
  );
}
