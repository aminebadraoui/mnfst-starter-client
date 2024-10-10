import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import p5 from 'p5';
import useLoadingStore from '../stores/loadingStore';

const VantaBackground = ({ color = 0x0000ff, backgroundColor = 0x150825, className = '' }) => {
    const myRef = useRef(null);
    const setObjectLoaded = useLoadingStore((state) => state.setObjectLoaded);

    useEffect(() => {
        const loadEffect = async () => {
            try {
                const TOPOLOGY = (await import('vanta/dist/vanta.topology.min')).default;
                if (!TOPOLOGY) {
                    console.error('TOPOLOGY effect not found');
                    return;
                }
                TOPOLOGY({
                    el: myRef.current,
                    THREE: THREE,
                    p5: p5,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: color,
                    backgroundColor: backgroundColor
                });
                setObjectLoaded('vantaBackground');
            } catch (error) {
                console.error('Error loading Vanta effect:', error);
            }
        };
        loadEffect();
    }, [color, backgroundColor, setObjectLoaded]);

    return <div ref={myRef} className={`${className} w-full h-full`} />;
};

export default VantaBackground;