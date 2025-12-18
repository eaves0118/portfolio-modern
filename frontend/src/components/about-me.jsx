import React from "react";
import Button from "./button";
import { Code, UserRound, Briefcase } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-gradient">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Tech Creator
          </h3>
          <p className="text-muted-foreground">
            I’m a guy who genuinely enjoys programming. My passion for code
            started after watching a movie about hackers — well, I thought
            hackers looked incredibly cool back then. Since then, that curiosity
            has slowly grown into a real interest in building things with code
            and understanding how technology works.
          </p>
          <p className="text-muted-foreground">
            Thanks for stopping by and reading a bit about me. I hope your day
            is filled with positivity and good energy.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 pt-4 justify-center max-w-[400px] md:flex-row ">
            <Button
              content="Get In Touch"
              className="cosmic-button border px-4 py-2 text-white rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
            <Button
              content="Dowload CV"
              className="border-[2px] border-primary px-4 py-2 text-gradient rounded-[32px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <UserRound className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Designing intuitive user interfaces and seamless user
                  experiences
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from conception to completion with agile
                  methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
