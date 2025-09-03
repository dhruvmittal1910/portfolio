"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoIntro({ children }: { children: React.ReactNode }) {
    const [showAnimation, setShowAnimation] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Hide animation after 1.5 seconds
        const timeout = setTimeout(() => setShowAnimation(false), 1500);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const logoSize = 50; // Adjust to your logo size
            const isSmallScreen = window.innerWidth < 640; // Tailwind 'sm' breakpoint = 640px
            const paddingX = isSmallScreen ? 30 : 45;
            const paddingY = isSmallScreen ? 4 : 10;
            const x = -window.innerWidth / 2 + logoSize / 2 + paddingX;
            const y = -window.innerHeight / 2 + logoSize / 2 + paddingY;
            setPosition({ x, y });
        }
    }, []);

    return (
        <>
            {/* Show animation overlay while animating */}
            <AnimatePresence>
                {showAnimation && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent z-50 pointer-events-none"
                        initial={{ scale: 3, rotate: 0, x: 0, y: 0, opacity: 1 }}
                        animate={{
                            scale: 1,
                            rotate: 360,
                            x: position.x,
                            y: position.y,
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Image src="/logo2.png" alt="Animated Logo" width={50} height={50} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Render children ONLY when animation finished */}
            {!showAnimation && <>{children}</>}
        </>
    );
}
