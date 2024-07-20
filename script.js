let html = document.getElementsByTagName("html");
let body = document.getElementsByTagName("body");
let mode_toggler = document.getElementById("btn_mode_switcher");
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  body[0].classList.toggle("mode-light")
  body[0].classList.toggle("mode-dark")
})
gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none" });
    const t1 = gsap.timeline({ repeat: 0, repeatDelay: 1, yoyo: false });
    /*t1.to("#hello-text span", { duration: 1, text: " Hello" });
    t1.to("#name-text span", { duration: 1, text: " I am Lalit Nath" });
*/
    t1.from(".intro-text", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.6,
      x: "-200px",
    });
    gsap.from(".illustration-img", { opacity: 0, duration: 0.8, x: "200px" });
    let skilltext = document.getElementsByClassName("skill-text");
    for (let i = 0; i < skilltext.length; i++) {
      const value = skilltext[i].innerHTML;
      let count = 0;
      setInterval(() => {
        if (count == parseInt(value) + 1) {
          clearInterval();
        } else {
          skilltext[i].innerHTML = count + "%";
          count = count + 1;
        }
      }, 20);
    }
    let circle = document.getElementsByTagName("circle");
    gsap.from(".skill", {
      scrollTrigger: {
        trigger: "#skills-container",
        toggleActions: "play none none reset",
        onEnter: () => {
          for (let index = 0; index < circle.length; index++) {
            circle[index].classList.add("circle-animate");
          }
        },
        onLeaveBack: () => {
          for (let index = 0; index < circle.length; index++) {
            circle[index].classList.remove("circle-animate");
          }
        },
      },
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      y: "100px",
    });
    gsap.to(".underline-animation", {
      scrollTrigger: {
        trigger: "#qualification-container",
        toggleActions: "play none none reset",
      },
      width: "100%",
      duration: 0.8,
    });

    gsap.from(".connecting-line-vertical", {
      scrollTrigger: {
        trigger: "#qualification-list",
        toggleActions: "play none none reset",
      },
      height: "0%",
      duration: 4,
    });

    gsap.from(".item", {
      scrollTrigger: {
        trigger: "#qualification-list",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      x: "100px",
    });

    gsap.from(".connecting-line", {
      scrollTrigger: {
        trigger: "#qualification-list",
        toggleActions: "play none none reset",
      },
      width: "0%",
      stagger: 0.8,
      duration: 1.5,
    });

    gsap.from("#projects-container-heading", {
      scrollTrigger: {
        trigger: "#projects-container-heading",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      duration: 0.8,
      y: "100px",
    });

    gsap.from(".project", {
      scrollTrigger: {
        trigger: ".projects",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      y: "200px",
    });

    gsap.from(".experience", {
      scrollTrigger: {
        trigger: ".experiences",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      duration: 1,
      x: "200px",
    });
    gsap.to(".experience-underline-animation", {
      scrollTrigger: {
        trigger: "#experience-container-heading",
        toggleActions: "play none none reset",
      },
      width: "100%",
      duration: 0.8,
    });
    gsap.to(".contact-underline-animation", {
      scrollTrigger: {
        trigger: "#contact-container-heading",
        toggleActions: "play none none reset",
      },
      width: "100%",
      duration: 0.8,
    });
    gsap.from(".scoial-media", {
      scrollTrigger: {
        trigger: ".contact-details",
        toggleActions: "play none none reset",
      },
      duration: 0.8,
      y: "50px",
      opacity: 0
    });

    gsap.to("#sticky-social-container", {
      scrollTrigger: {
        trigger: "#contact-container-heading",
        toggleActions: "play none none reset",
        scrub: true,
      },
      duration: 0.8,
      x: "-400px",
      opacity: 0
    });

    let hamburger = document.getElementsByClassName("hamburger");
    let navLinks = document.getElementsByClassName("nav-links");
    let links = document.getElementsByClassName("nav-items");
    
    function actionA() {
      //Animate Links
      navLinks[0].classList.toggle("open");
      for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("fade");
      }

      //Hamburger Animation
      hamburger[0].classList.toggle("toggle");
      
    }
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", actionA);
      }


      document.addEventListener("DOMContentLoaded", function () {
        // Open popup
        document.querySelectorAll(".popup-trigger").forEach(function (trigger) {
          trigger.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(".popup").classList.add("is-visible");
          });
        });
      
        // Close popup
        document.querySelectorAll(".popup").forEach(function (popup) {
          popup.addEventListener("click", function (event) {
            if (event.target.classList.contains("popup-close") || event.target.classList.contains("popup")) {
              event.preventDefault();
              this.classList.remove("is-visible");
            }
          });
        });
      
        // Close popup when clicking the ESC keyboard button
        document.addEventListener("keyup", function (event) {
          if (event.key === "Escape") {
            document.querySelectorAll(".popup").forEach(function (popup) {
              popup.classList.remove("is-visible");
            });
          }
        });

        setTimeout(()=>{
          document.querySelectorAll(".popup").forEach(function (popup) {
            popup.classList.remove("is-visible");
          });
        },20000)
      });
      