
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={`${styles.container} `}>
      <div className="outer">
        <div className="hdr">
          <div className="lg">
            <Image
              src="/images/genie.png"
              alt="logo"
              width={75}
              height={75}
            ></Image>
          </div>
          <div className="desc">
            <p style={{ color: "#102333", fontWeight: "bold", fontSize: 20 }}>
              Interview
              <br />
              <span style={{ color: "#ed6939", fontSize: 25,  }}>
                {" "}
                G e n i e{" "}
              </span>
            </p>
          </div>
        </div>
        <div className={`${styles.btn} `}>
         
        <Link href="/interview_form">
            <button className="btn-primary">
              <a style={{ color: "#D8DEE3", textDecoration: "none" }}>
                Take Interview
              </a>
            </button>
          </Link>
          <Link href="/interview_results">
            <button className="btn-secondary">
              <a style={{ color: "#D8DEE3", textDecoration: "none" }}>
                {" "}
                Interview Results{" "}
              </a>
            </button>
          </Link>
          <Link href="/library">
            <button className="btn-secondary">
              <a style={{ color: "#D8DEE3", textDecoration: "none" }}>
                {" "}
                Contribute to Library
              </a>
            </button>
          </Link>
         
        </div>
      </div>
      <style jsx>{`
        .hdr {
          display: flex;

          justify-content: center;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        p {
          margin-left: 1rem;
        }
        .lg {
          margin-bottom:1rem;
        }
        
         
      `}</style>
    </div>
  );
};

export default Home;
