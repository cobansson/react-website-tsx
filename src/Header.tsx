import reactLogo from "../images/react-logo.png";

export default function Header() {
  return (
    <nav>
      <div className="react-logo-and-name">
        <img src={reactLogo} />
        <h1>ReactFacts</h1>
      </div>
      <h1 className="tsx-project">TSX Course - Project 1</h1>
    </nav>
  );
}
