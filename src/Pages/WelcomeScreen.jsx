import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Bug, Terminal } from "lucide-react";

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      setTimeout(() => {
        onLoadingComplete();
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Background glow */}

          <div className="absolute inset-0">

            <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] top-20 left-20"></div>

            <div className="absolute w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] bottom-20 right-20"></div>

          </div>

          {/* Main content */}

          <motion.div
            className="relative z-10 w-[90%] max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Logo / Icon */}

            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
              }}
            >

              <div className="relative">

                <div className="absolute -inset-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                <div className="relative w-20 h-20 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center">

                  <ShieldCheck
                    className="w-10 h-10 text-indigo-400"
                  />

                </div>

              </div>

            </motion.div>

            {/* Name */}

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >

              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">
                Welcome to
              </p>

              <h1 className="text-4xl sm:text-6xl font-bold">

                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Shahil's
                </span>

                <br />

                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  QA Portfolio
                </span>

              </h1>

            </motion.div>

            {/* Terminal */}

            <motion.div
              className="mt-10 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
            >

              {/* Terminal top */}

              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">

                <span className="w-3 h-3 rounded-full bg-red-400"></span>

                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>

                <span className="w-3 h-3 rounded-full bg-green-400"></span>

                <span className="ml-3 text-xs text-gray-500">
                  qa-portfolio.exe
                </span>

              </div>

              {/* Terminal body */}

              <div className="p-5 sm:p-6 font-mono text-sm space-y-4">

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-gray-500"
                >
                  $ initializing_qa_portfolio
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center gap-3 text-green-400"
                >

                  <ShieldCheck className="w-4 h-4" />

                  <span>
                    Quality environment initialized
                  </span>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center gap-3 text-yellow-400"
                >

                  <Bug className="w-4 h-4" />

                  <span>
                    Searching for bugs...
                  </span>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="flex items-center gap-3 text-blue-400"
                >

                  <Terminal className="w-4 h-4" />

                  <span>
                    Loading QA portfolio...
                  </span>

                </motion.div>

              </div>

            </motion.div>

            {/* Loading bar */}

            <div className="mt-8">

              <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                />

              </div>

              <div className="flex justify-between mt-3 text-xs text-gray-600">

                <span>
                  SHAHIL_MANSURI
                </span>

                <span>
                  QA TESTER
                </span>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;