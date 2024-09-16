import { ColorGenerator } from 'hex-color-randomizer';

export default function ExampleComponents(props) {
  return (
    <>
      <h1>The color generator</h1>
      <input>{props.color}</input>
    </>
  );
}
