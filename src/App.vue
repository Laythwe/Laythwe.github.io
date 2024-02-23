<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="w-screen bg-primaryBg">
    <div class="w-full flex flex-row p-[4rem]">
      <div class="w-2/3 h-50 bg-white px-[3em]">
        <div class="text-5xl py-4 text-btnpurple">M</div>
        <div class="text-3xl py-2">Hi There! </div>
        <div class="text-3xl ">I'M 
          <span class="text-btnpurple">WIN MYAT THWE</span>
        </div>
        <div class="py-5">
          <button class="bg-black text-white px-5 py-2 text-lg font-bold rounded-md">SOFTWARE ENGINEER</button>
        </div>
        <p class="text-justify">
          "Driven and detail-oriented software developer with a passion for
crafting efficient, scalable, and user-centric solutions. Proficient in
programming languages and experienced in full-stack
development, adept at collaborating in agile environments to
deliver high-quality code. Seeking to leverage technical expertise
and innovative problem-solving skills to contribute effectively to a
dynamic team, while continuously learning and adapting to
emerging technologies.
"
        </p>
        <div class="py-5 w-full flex flex-row">
          <button class="w-1/2 bg-btnpurple text-white mx-[3em] py-3 text-lg font-bold rounded-xl">
           <a href="#more">MORE ABOUT ME</a> 
          </button>
          <button class="w-1/2 bg-btnpurple text-white mx-[3em] py-3 text-lg font-bold rounded-xl">DOWNLOAD CV
            
          </button>
        </div>
        <div class="py-5 w-full flex flex-row">
          <button class="w-1/2 bg-btnpurple text-white mx-[3em] text-lg font-bold rounded-xl">
            <a href="#project">PROJECTS</a>
            </button>
          <div class="w-1/2 mx-[2em] space-x-[3rem] flex flex-row px-[4em] py-3">
            
                                    <a href="https://github.com/dashboard" target="_blank">
                                      <Icon
                                         
                                         icon="charm:github" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    /> 
                                    </a>
                                    <a href="https://www.linkedin.com/feed/" target="_blank">
                                      <Icon 
                                    icon="mingcute:linkedin-fill" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    /> 
                                    </a>
                                    <a href="" target="_blank">
                                      <Icon
                                    icon="entypo-social:instagram" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    />
                                    </a>
                                    
          </div>
        </div>
         
      </div>

      <div class="w-1/3 h-full bg-white">
        <div class="rounded-lg ">
          <img src="../src/assets/cat.jpeg" alt="" class="h-2/3" />
        </div>
      </div>
      
    </div>

    <div class="w-full px-[4rem] py-[4rem] bg-white">
      <h3 class="w-full px-[2em] font-bold text-3xl text-black py-2" >
        <a name="more">Education</a>
        </h3>
      <div class="w-full flex flex-row text-lg py-2 font-semibold">
      <p class="w-full px-[3em] flex flex-row">
        <Icon
                                    icon="bxl:deviantart" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    />
        Bachelor of Arts in English [ Dagon University ]
      </p>
      <p class="w-full px-[3em] flex flex-row">
        <Icon
                                    icon="bxl:deviantart" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    />
        Level 4 Diploma in Computing [ NCC Education ]
      </p>
      </div> 
      <div class="w-full flex flex-row text-lg py-2 font-semibold">
        <p class="w-full px-[3em] flex flex-row ">
          <Icon
                                    icon="bxl:deviantart" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    />
          Diploma in French [ University of Foreign Languages ]
        </p>
        <p class="w-full px-[3em] flex flex-row">
          <Icon
                                    icon="bxl:deviantart" 
                                        class="text-4xl font-extrabold block text-btnpurple"
                                    />
          Web Developement [ Ex;braiN Education ]
        </p>
        </div> 
    </div> 

    <div class="w-full px-[4rem] py-[4rem] bg-primaryBg">
      <h3 class="w-full font-bold text-3xl text-black py-4" >
        <a name="project">Projects</a>
        </h3>
        <div class="w-full flex flex-row space-px-3">
          <div class="w-1/2">
            <img src="../src/assets/banner.png" alt="" class="w-full px-4">
          </div>
          <div class="w-1/2 px=[3rem] text-justify">
            <span class="font-bold">Project Title : XStore (Online E-commerce Website )</span>
Sep 2023 - Nov 2023
<br> <br>
<span class="font-bold ">Responsibilities:</span>
XStore is a e-commerce website designed to sell IT Products over the internet and it
allows business to sell and individuals to conduct transactions and make purchases.
Categories organized IT products are displayed for sale and individuals can
electronically purchase them effortlessly.
<br>
<span class="font-bold">Objective:</span>
Develop and maintain the retailer site of an e-commerce platform focused
on selling IT products, ensuring seamless functionality and user-friendly interfaces for
retailers. <br>
<span class="font-bold">Role:</span> Full-stack Developer (Frontend & Backend) - Retailer Panel
          </div>
        </div>

        <hr class="py-4">
        <div class="w-full flex flex-row space-px-3">
          
          <div class="w-1/2 text-justify">
            <span class="font-bold">Project Title : Bridge (Japan Job Seeking Software )</span>
Dec 2023 - Current
<br> <br>
<span class="font-bold">Responsibilities:</span>
Bridge focuses on assisting teenagers in finding jobs in Japan. By simply creating their
resumes, we connect them with suitable employment opportunities, helping them kickstart
their careers.
<br>
<span class="font-bold">Objective:</span>
 Develop and maintain the retailer site of an e-commerce platform focused
on selling IT products, ensuring seamless functionality and user-friendly interfaces for
retailers. <br>
<span class="font-bold">Role:</span> Full-stack Developer (Frontend & Backend) - Retailer Panel
          </div>
          <div class="w-1/2 px-[5rem]">
            <img src="../src/assets/framee.png" alt="" class="w-11/12 px-4">
          </div>
        </div>


    </div>

     
  </div>
</template>

<style scoped>
@import "../src/css/index.css";
</style>
