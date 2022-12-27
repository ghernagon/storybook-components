import "./mylabel.css";

interface MyLabelProps {
  /**
   * Label contents
   */
  label?: string;
  /**
   * How large should the label be?
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Should show text capitalized?
   */
  allCaps?: boolean;
  /**
   * What color should be used?
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Custom font color
   */
  fontColor?: string;
  /**
   * What color should be used as background ?
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
