import Image from "next/image";
import styles from "@/styles/Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className={styles.header__container}>
      {/* Left Container */}

      <div className={styles.left__container}>
        <Image
          src={"/assets/header__logo.png"}
          width={160}
          height={40}
          alt="Logo"
        />
      </div>
      {/* Right Container */}
      <div className={styles.right__container}>
        <button>Search</button>
        <button>Join Call</button>
        <RxHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
