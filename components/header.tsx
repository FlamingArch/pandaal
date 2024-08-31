export default function Header(props: {
  children?: React.ReactNode;
  branding?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  hideBrandingOnSmallerViewport?: boolean;
}) {
  const brandingClassNames = props.hideBrandingOnSmallerViewport
    ? "hidden md:flex"
    : "flex";

  return (
    <header className="p-6 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 flex sticky top-0 border-b border-black/10 items-center">
      {props.leading}
      <div className={brandingClassNames}>{props.branding}</div>
      <div className="flex-grow">{props.children}</div>
      {props.trailing}
    </header>
  );
}
