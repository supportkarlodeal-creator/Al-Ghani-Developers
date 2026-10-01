"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import styles from "./green-living-initiative.module.css";

const TREES_PLANTED = 15525;
const TREE_GOAL = 1000000;

function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element) return;

    let animationFrame = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;
        observer.disconnect();

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth ease-out animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(easedProgress * target));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [element, target, duration]);

  return {
    setElement,
    count,
  };
}

export default function GreenLivingInitiativePage() {
  const { setElement: counterRef, count } = useCountUp(
    TREES_PLANTED,
  );

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            CEO'S VISION
            ===================================================== */}
        <section className={styles.visionSection}>
          <div className={styles.container}>
            <div className={styles.visionGrid}>
              {/* CEO IMAGE */}
              <div className={styles.visionImageWrap}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/11/Muneeb-Aleem-Awan-CEO-Al-Ghani-Developers1.png"
                  alt="Muneeb Aleem Awan - CEO Al Ghani Developers"
                  width={1200}
                  height={800}
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.visionImage}
                />
              </div>

              {/* CEO VISION */}
              <div className={styles.visionContent}>
                <div className={styles.visionHeading}>
                  <span>GREEN LIVING INITIATIVE</span>

                  <h1>CEO&apos;S VISION</h1>
                </div>

                <p>
                  At Al-Ghani Developers, we believe that true progress is
                  measured not only by the communities we build but also by
                  the environment we nurture. Our Green Living Campaign is a
                  reflection of this belief – a long-term commitment to
                  creating a balance between modern development and nature.
                </p>

                <p>
                  Through the plantation of 1 Million trees, along with the
                  introduction of Green Roofs and the development of Miyawaki
                  Forests, we aim to build communities that breathe
                  sustainability, inspire responsibility, and contribute to a
                  cleaner, greener Pakistan. These initiatives are not just
                  about enhancing landscapes they represent our dedication to
                  cultivating awareness, care, and a lasting legacy of
                  environmental stewardship for future generations.
                </p>

                <p>
                  We envision a future where every project under Al-Ghani
                  Developers stands as a symbol of harmony between people and
                  the planet where sustainable living becomes a shared value,
                  not an option.
                </p>

                <div className={styles.signature}>
                  <span>– Muneeb Aleem Awan</span>

                  <strong>CEO AL GHANI DEVELOPERS</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NUMBER OF TREES PLANTED & COUNTED
            ===================================================== */}
        <section className={styles.treesSection}>
          {/* Background image */}
          <Image
            src="/images/common/trees-planted.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.treesBackground}
          />

          {/* Very light overlay */}
          <div className={styles.treesOverlay} />

          <div className={styles.treesInner}>
            <h2 className={styles.treesTitle}>
              Number Of Trees Planted &amp; Counted
            </h2>

            {/* =================================================
                COUNTER PANEL
                ================================================= */}
            <div className={styles.counterPanel}>
              {/* TREE CIRCLE */}
              <div className={styles.treeCircle}>
                <Image
                  src="https://alghani.com.pk/wp-content/uploads/2025/10/Untitled-design-2025-10-29T173617.841-Photoroom.png"
                  alt="Al Ghani tree planting initiative"
                  width={500}
                  height={500}
                  sizes="225px"
                  className={styles.treeImage}
                />
              </div>

              {/* TREE COUNT */}
              <div
                ref={counterRef}
                className={styles.countArea}
              >
                <div className={styles.countNumber}>
                  {count.toLocaleString("en-US")}
                </div>
              </div>

              {/* TREE LABEL */}
              <div className={styles.countLabel}>
                Trees Planted
              </div>
            </div>

            {/* =================================================
                GOAL CIRCLE
                ================================================= */}
            <div className={styles.goalCircle}>
              <div className={styles.goalTitle}>
                Goal
              </div>

              <div className={styles.goalNumber}>
                {TREE_GOAL.toLocaleString("en-US")}
              </div>

              <div className={styles.goalLabel}>
                Trees To Be Planted In Next 10 Years
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}