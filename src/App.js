const gradientClasses =
  "bg-clip-text text-transparent bg-gradient-to-r from-green to-mauve";
const textClasses = "p-4 text-8xl text-center font-bold";

export function App() {
  return (
    <h1 className={[gradientClasses, textClasses].join(" ")}>
      Hello there! Gradient text is pretty cool, right?
    </h1>
  );
}
