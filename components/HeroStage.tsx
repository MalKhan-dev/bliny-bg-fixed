"use client";

import React from "react";
import Navigation from "../components/Navigation";

type Props = {
  children: React.ReactNode;
  withCorners?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function HeroStage({ children, withCorners = true, ...rest }: Props) {
  return (
    <div className="hero-stage" {...rest}>
      <div className="hero-bg" />
      {withCorners && (
        <div className="corners">
          <img className="corner corner-tl" src="/bg/corners/tl.png" alt="" />
          <img className="corner corner-tr" src="/bg/corners/tr.png" alt="" />
          <img className="corner corner-bl" src="/bg/corners/bl.png" alt="" />
          <img className="corner corner-br" src="/bg/corners/br.png" alt="" />
        </div>
      )}
      
      <div className="zone">
        <div className="zone__map">
          {children}
        </div>
        <nav className="nav-in-zone">
          <Navigation currentPage="/" />
        </nav>
      </div>
    </div>
  );
}