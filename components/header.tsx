export default function Header(props: {
  children?: React.ReactNode;
  branding?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  hideBrandingOnSmallerViewport?: boolean;
}) {
  return (
    <header className="p-6 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 flex sticky top-0 border-b border-black/10 items-center">
      {props.leading}

      {props.branding && (
        <div className="flex-grow hidden md:flex">{props.branding}</div>
      )}

      {props.children}
      {props.trailing}
    </header>
  );
}
