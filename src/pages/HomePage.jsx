import { useEffect, useRef } from "react"

export default function HomePage() {
  const horizontalContainerRef = useRef(null)

  useEffect(() => {
    const horizontalContainer = horizontalContainerRef.current;
    
    const handleWheel = (e) => {
      e.preventDefault();
      // 不清楚 scrollLeft 是什麼
      let scrollDistance = horizontalContainer.scrollLeft + e.deltaY * 3;
      // horizontalContainer.scrollLeft += e.deltaY;
      console.log(scrollDistance);
      
      horizontalContainer.scrollTo({
        left: scrollDistance,
        behavior: 'smooth'
      });
    };
    
    // 不清楚 passive 是什麼
    horizontalContainer.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      horizontalContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <main className='horizontal-wrapper'>
      <section className="horizontal-container" ref={horizontalContainerRef}>
        <section className="horizontal-section"></section>
        <section className="horizontal-section"></section>
        <section className="horizontal-section"></section>
        <section className="horizontal-section"></section>
      </section>
    </main>
  )
}