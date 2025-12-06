// components/PageTransition.jsx
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
          filter: "blur(10px)",
        },
        in: {
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        },
        out: {
          opacity: 0,
          filter: "blur(5px)",
          transition: {
            duration: 0.5
          }
        }
      }}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Overlay liquide */}
      <motion.div
        className="liquid-overlay"
        initial={{ scale: 0 }}
        animate={{ scale: 4 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.6) 100%)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex: 50
        }}
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;