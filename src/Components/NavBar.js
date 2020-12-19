import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";


export const NavBar = () => {
  const timing = {
    duration: 3000, iterations: Infinity
  }
  const rainbowChar1 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(0deg)' },
      {filter: 'hue-rotate(360deg)'}
    ],
    timing: timing
  })
  const rainbowChar2 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(25deg)' },
      {filter: 'hue-rotate(385deg)'}
    ],
    timing: timing
  })
  const rainbowChar3 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(50deg)' },
      {filter: 'hue-rotate(410deg)'}
    ],
    timing: timing
  })
  const rainbowChar4 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(75deg)' },
      {filter: 'hue-rotate(435deg)'}
    ],
    timing: timing
  })
  const rainbowChar5 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(100deg)' },
      {filter: 'hue-rotate(460deg)'}
    ],
    timing: timing
  })
  const rainbowChar6 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(125deg)' },
      {filter: 'hue-rotate(485deg)'}
    ],
    timing: timing
  })
  const rainbowChar7 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(150deg)' },
      {filter: 'hue-rotate(510deg)'}
    ],
    timing: timing
  })
  const rainbowChar8 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(175deg)' },
      {filter: 'hue-rotate(535deg)'}
    ],
    timing: timing
  })
  const rainbowChar9 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(200deg)' },
      {filter: 'hue-rotate(560deg)'}
    ],
    timing: timing
  })
  const rainbowChar10 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(225deg)' },
      {filter: 'hue-rotate(585deg)'}
    ],
    timing: timing
  })
  const rainbowChar11 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(250deg)' },
      {filter: 'hue-rotate(610deg)'}
    ],
    timing: timing
  })
  const rainbowChar12 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(275deg)' },
      {filter: 'hue-rotate(635deg)'}
    ],
    timing: timing
  })
  const rainbowChar13 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(300deg)' },
      {filter: 'hue-rotate(660deg)'}
    ],
    timing: timing
  })
  const rainbowChar14 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(325deg)' },
      {filter: 'hue-rotate(685deg)'}
    ],
    timing: timing
  })
  const rainbowChar15 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(350deg)' },
      {filter: 'hue-rotate(710deg)'}
    ],
    timing: timing
  })
  const rainbowChar16 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(375deg)' },
      {filter: 'hue-rotate(735deg)'}
    ],
    timing: timing
  })
  const rainbowChar17 = useWebAnimations({
    keyframes: [
      {filter: 'hue-rotate(400deg)' }
    ],
    timing: timing
  })


  return (
    <nav className="navbar navbar-dark bg-dark bg-gradient">
      <div className="container-fluid">
      <span className="text-white mx-auto rainbow-anim">
          <span className="rainbow-char-1" ref={rainbowChar1.ref}>S</span>
          <span className="rainbow-char-2" ref={rainbowChar2.ref}>w</span>
          <span className="rainbow-char-3" ref={rainbowChar3.ref}>i</span>
          <span className="rainbow-char-4" ref={rainbowChar4.ref}>t</span>
          <span className="rainbow-char-5" ref={rainbowChar5.ref}>c</span>
          <span className="rainbow-char-6" ref={rainbowChar6.ref}>h</span>
          <span className="rainbow-char-7 p-1" ref={rainbowChar7.ref}></span>
          <span className="rainbow-char-8" ref={rainbowChar8.ref}>e</span>
          <span className="rainbow-char-9" ref={rainbowChar9.ref}>x</span>
          <span className="rainbow-char-10" ref={rainbowChar10.ref}>p</span>
          <span className="rainbow-char-11" ref={rainbowChar11.ref}>e</span>
          <span className="rainbow-char-12" ref={rainbowChar12.ref}>r</span>
          <span className="rainbow-char-13" ref={rainbowChar13.ref}>i</span>
          <span className="rainbow-char-14" ref={rainbowChar14.ref}>e</span>
          <span className="rainbow-char-15" ref={rainbowChar15.ref}>n</span>
          <span className="rainbow-char-16" ref={rainbowChar16.ref}>c</span>
          <span className="rainbow-char-17" ref={rainbowChar17.ref}>e</span>
        </span>
        <button className="navbar-toggler border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        
      </div>
    </nav>
  )
}
