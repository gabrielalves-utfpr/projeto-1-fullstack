import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { TextureLoader, SphereGeometry, MeshBasicMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './style.css'

import load from '../../assets/b6e0b072897469.5bf6e79950d23.gif'
import background from '../../assets/2k_stars_milky_way.jpg'
import earth from '../../assets/2k_earth_daymap.jpg'
import earthNight from '../../assets/2k_earth_nightmap.jpg'
import jupiter from '../../assets/2k_jupiter.jpg'
import mars from '../../assets/2k_mars.jpg'
import moon from '../../assets/2k_moon.jpg'
import neptune from '../../assets/2k_neptune.jpg'
import saturn from '../../assets/2k_saturn.jpg'
import sun from '../../assets/2k_sun.jpg'
import uranus from '../../assets/2k_uranus.jpg'
import venus from '../../assets/2k_venus_surface.jpg'

function Sphere({txt}) {
    const texture = new TextureLoader().load(txt);
    const geometry = new SphereGeometry(2, 32, 32);
    const material = new MeshBasicMaterial({ map: texture });
    const meshRef = React.useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function BackgroundSphere() {
    const texture = new TextureLoader().load(background);
    const geometry = new SphereGeometry(5, 32, 32); 
    const material = new MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const meshRef = React.useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

export default function Planets() {
    const [texture, setTexture] = useState(earth); // default texture

    const handleTextureChange = (event) => {
        const texture = event.target.value;
        setTexture(texture);
    };
    return (
        <div className='planets'>
            <div className='sphere-menu'>
                <label>
                    <input className='sphere-opt' type="radio" value={earth} checked={texture === earth} onChange={handleTextureChange} />
                    Earth
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={mars} checked={texture === mars} onChange={handleTextureChange} />
                    Mars
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={earthNight} checked={texture === earthNight} onChange={handleTextureChange} />
                    Earth Night
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={moon} checked={texture === moon} onChange={handleTextureChange} />
                    moon
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={neptune} checked={texture === neptune} onChange={handleTextureChange} />
                    neptune
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={jupiter} checked={texture === jupiter} onChange={handleTextureChange} />
                    jupiter
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={saturn} checked={texture === saturn} onChange={handleTextureChange} />
                    saturn
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={sun} checked={texture === sun} onChange={handleTextureChange} />
                    sun
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={uranus} checked={texture === uranus} onChange={handleTextureChange} />
                    uranus
                </label>
                <label>
                    <input className='sphere-opt' type="radio" value={venus} checked={texture === venus} onChange={handleTextureChange} />
                    venus
                </label>
            </div>
            <Canvas>
                <Suspense fallback={<img className='loading' src={load} alt="Loading..." />}>
                    <BackgroundSphere/>
                    <Sphere txt={texture}/>
                </Suspense>
            </Canvas>
        </div>
    );
}