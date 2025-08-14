import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón cuando el usuario scrollea hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#a33cfa] text-white shadow-lg hover:bg-[#8e2fd1] transition-all"
        aria-label="Volver arriba"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    )
  );
}
