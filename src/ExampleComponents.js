import { ColorGenerator } from 'hex-color-randomizer';
import { HexColorPicker } from 'react-colorful';
import styles from './ExampleComponents.module.scss';

export default function ExampleComponents(props) {
  return (
    <>
      <div>
        <div style={{ backgroundColor: props.color }}>
          <input
            value={props.color}
            className={styles.colorContainer}
            style={{ backgroundColor: props.color, border: 0 }}
            onChange={(event) => props.setColor(event.currentTarget.value)}
          ></input>
        </div>
      </div>
    </>
  );
}
