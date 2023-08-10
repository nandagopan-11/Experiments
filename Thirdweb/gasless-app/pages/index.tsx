import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div>
        <Web3Button
          contractAddress=""
          action={(contract) => contract.erc721.claim(1)}
        >Claim</Web3Button>
        </div>

      
      </main>
    </div>
  );
};

export default Home;
