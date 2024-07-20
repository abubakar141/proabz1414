"use client";
import React from 'react'
import Typewriter from "typewriter-effect"
import Image from 'next/image';
import { motion } from "framer-motion";


const Hero = () => {
  return (
   <div>
      <br /><br />
      <Image
        src={"/abz.jpeg"}
        alt='abz'
        height={500}
        width={500}
        className='rounded-full img'
      />
      <br /> 
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl ml-14 mt-11 m-2 ">
        <br /><br />
        Hi, I&apos;m
      </h1>
      <h1 className='text-6xl font-black text-blue-500 ml-12'>Abu Bakar</h1>
      <div className='text-3xl mt-5 font-black ml-14'>
        <Typewriter
          options={{
            strings: ["I'm Abu Bakar", "I'm a Frontend Developer", "I'm a UI/UX Designer", "I'm A Graphic Designer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 0
          }}
        />
      </div>
      </div>
  )
}

export default Hero;
