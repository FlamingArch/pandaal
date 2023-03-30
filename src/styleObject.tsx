export default class StyleObject {
  base: string;
  normal: string;
  hover: string;
  focus: string;
  focusHover: string;
  others: string;

  constructor(props: {
    base: string;
    normal: string;
    hover: string;
    focus: string;
    focusHover: string;
    others: string;
  }) {
    this.base = props.base;
    this.normal = props.normal;
    this.hover = props.hover;
    this.focus = props.focus;
    this.focusHover = props.focusHover;
    this.others = props.others;
  }

  getAllStyles = () => {
    return `${this.base} ${this.normal} ${this.hover} ${this.focus} ${this.focusHover} ${this.others}`;
  };
}
