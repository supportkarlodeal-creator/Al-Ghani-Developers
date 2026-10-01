import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import styles from "./maskan-block.module.css";

const maskanImage =
  "https://alghani.com.pk/wp-content/uploads/2026/04/ALGHANI-GARDEN-MASKAN-BLOCK-LAHOWR-UNDER-CONSTRUCTIONS.png";

export default function MaskanBlockPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src={maskanImage}
            alt="Maskan Block - Al Ghani Garden Phase 3"
            width={1920}
            height={900}
            priority
            sizes="100vw"
            className={styles.heroImage}
            unoptimized
          />
        </section>

        <section className={styles.description}>
          <div className={styles.descriptionInner}>
            <p>
              Al Ghani Maskan: An extended Block of Alghani garden phase 3.
              Currently under development stage.
            </p>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </>
  );
}