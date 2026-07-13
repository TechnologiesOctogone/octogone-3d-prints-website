/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import {useRef, useEffect, useState} from "react"

/**
 * Hooks
 */
import useNavbar from "../hooks/use_navbar";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";


const Navbar = ({navOpen}) => {

    const {t} = useTranslation();

    const lastActiveLink = useRef();
    const {current, setCurrent} = useNavbar();
    const activeBox = useRef();
    const [lock, setLock] = useState(false);

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    useEffect(initActiveBox, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event) => {
        updateCurrent(event.target);
        toggleLock(event.target);
    }

    function updateCurrent(element) {
        lastActiveLink.current?.classList.remove('active');
        element.classList.add('active');
        lastActiveLink.current = element;
        activeBox.current.style.top = element.offsetTop + 'px';
        activeBox.current.style.left = element.offsetLeft + 'px';
        activeBox.current.style.width = element.offsetWidth + 'px';
        activeBox.current.style.height = element.offsetHeight + 'px';
    }

    function toggleLock(element) {
        setLock(true);
        setTimeout(() => {
            setLock(false);
            setCurrent(element);
        }, 500); 
    }

    useEffect(() => {
        if(!lock && current)
            updateCurrent(current);

    }, [current])

    const navItems = [
        {
            label: 'navHome',
            link: '#home',
            className: 'home nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'navServices',
            link: '#services',
            className: 'services nav-link'
        },
        {
            label: 'navProjects',
            link: '#projects',
            className: 'projects nav-link'
        },
        /*{
            label: 'Reviews',
            link: '#reviews',
            className: 'reviews nav-link'
        },*/
        {
            label: "navContact",
            link: '#contact',
            className: 'contact nav-link'
        }
    ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({ label, link, className, ref}, key) => (
                <a
                    href={link}
                    key={key}
                    ref={ref}
                    className={className}
                    onClick={activeCurrentLink}
                >
                    {t(label)}
                </a>
            ))
        }

        <div className="active-box"
            ref={activeBox}
        ></div>
    </nav>
  )
}

export default Navbar;