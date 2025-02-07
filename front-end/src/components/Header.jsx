// import SplitText from "../animations/StartBorder";
const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

{/* <SplitText
text={title}
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>; */}
