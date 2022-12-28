/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
