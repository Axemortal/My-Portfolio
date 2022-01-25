import Calculator from "./Calculator/Calculator";

export default function Project() {
  function GridItem(props) {
    return <div className="grid-item">{props.children}</div>;
  }
  return (
    <section className="section section__projects">
      <div className="container">
        <h2 className="section--title">My projects</h2>
        <p>
          I enjoy prototyping and building applications. My recent work and
          project are below
        </p>
        <div className="project--grid">
          <GridItem>
            <p className="grid-item-name">Calculator</p>
            <Calculator />
          </GridItem>
        </div>
      </div>
    </section>
  );
}
