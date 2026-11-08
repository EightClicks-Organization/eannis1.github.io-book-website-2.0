import './BackToTop.css';

export function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"})
    }
    return (
        <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
    );
}
