import { ColorGenerator } from 'hex-color-randomizer';
import { HexColorPicker } from 'react-colorful';
import styles from './ExampleComponents.module.scss';

export default function ExampleComponents(props) {
  // const [isComplementaryPalette, setComplementaryPalette] = useState(true);
  return (
    <>
      <div className={styles.parent} style={{ backgroundColor: props.color }}>
        <div style={{ backgroundColor: props.color }}>
          <div
            className={styles.colorContainer}
            style={{
              backgroundColor: props.color,
              color: props.complementaryPalette,
            }}
          >
            {props.colorName}
          </div>
          {/* <input
            value={props.color}
            className={styles.colorContainer}
            style={{ backgroundColor: props.color, border: 0 }}
            onChange={(event) => props.setColor(event.currentTarget.value)}
          ></input> */}
        </div>
      </div>
    </>
  );
}
