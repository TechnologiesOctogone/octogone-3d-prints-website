/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useEffect, useRef } from "react";

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

/**
 * Hooks
 */
import useOnScreen from "../hooks/on_screen";
import useNavbar from "../hooks/use_navbar";

const reviews = [
    {
        content:
            "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
        name: "Sophia Ramirez",
        imgSrc: "people-1.jpg",
        company: "PixelForge",
    },
    {
        content:
            "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
        name: "Ethan Caldwell",
        imgSrc: "people-2.jpg",
        company: "NexaWave",
    },
    {
        content:
            "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
        name: "Liam Bennett",
        imgSrc: "people-3.jpg",
        company: "CodeCraft",
    },
    {
        content:
            "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
        name: "Noah Williams",
        imgSrc: "people-4.jpg",
        company: "BrightWeb",
    },
    {
        content:
            "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
        name: "Ava Thompson",
        imgSrc: "people-5.jpg",
        company: "TechMosaic",
    },
    {
        content:
            "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
        name: "Jonathan",
        imgSrc: "people-6.jpg",
        company: "Skyline Digital",
    },
    {
      content:
          "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
      name: "Sophia Ramirez",
      imgSrc: "people-1.jpg",
      company: "PixelForge",
  },
  {
      content:
          "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      name: "Ethan Caldwell",
      imgSrc: "people-2.jpg",
      company: "NexaWave",
  },
  {
      content:
          "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
      name: "Liam Bennett",
      imgSrc: "people-3.jpg",
      company: "CodeCraft",
  },
  {
      content:
          "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
      name: "Noah Williams",
      imgSrc: "people-4.jpg",
      company: "BrightWeb",
  },
  {
      content:
          "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
      name: "Ava Thompson",
      imgSrc: "people-5.jpg",
      company: "TechMosaic",
  },
  {
      content:
          "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
      name: "Jonathan",
      imgSrc: "people-6.jpg",
      company: "Skyline Digital",
  },
];

const imgSrcFolder = "images/Review/";

const Review = () => {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const { current, setCurrent } = useNavbar();

    useEffect(() => {
        if(isVisible && current !== ref)
            setCurrent(document.getElementsByClassName("reviews")[0])
    }, [isVisible]);

    return (
        <section ref={ref} id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-9 ">Customers Reviews</h2>

                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            content={content}
                            name={name}
                            imgSrc={imgSrcFolder + imgSrc}
                            company={company}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
