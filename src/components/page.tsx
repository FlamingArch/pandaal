type ScaffoldProps = {
  children: React.ReactNode;
  appBar?: React.ReactNode;
  bottomAppBar?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  sidebar?: React.ReactNode;
  backdrop?: React.ReactNode;
  contentClassName?: string;
  scrollRef?: React.LegacyRef<HTMLDivElement> | undefined;
  responsive?: boolean;
  padding?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  margin?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  gap?: number;
  className?: string;
};

export default function Page(props: ScaffoldProps) {
  return (
    <div
      className={
        "flex flex-col w-screen min-h-screen " +
        (props.backdrop
          ? ""
          : "bg-white nodark:bg-black text-black nodark:text-white ") +
        props.className
      }
      ref={props.scrollRef}
    >
      <div className="-z-10 fixed w-screen h-screen grid place-content-center">
        {props.backdrop}
      </div>
      {props.appBar}
      {props.leading}
      <div
        className={
          "flex flex-grow items-stretch " +
          (props.responsive ? "responsive" : "")
        }
      >
        {props.sidebar}
        <div
          className={
            "flex flex-col flex-grow overflow-hidden " + props.contentClassName
          }
          style={{
            padding:
              typeof props.padding == "number"
                ? `${(props.padding ?? 6) / 4}rem`
                : `${(props.padding?.top ?? 6) / 4}rem ${
                    (props.padding?.right ?? 6) / 4
                  }rem ${(props.padding?.bottom ?? 6) / 4}rem ${
                    (props.padding?.left ?? 6) / 4
                  }rem`,
            margin:
              typeof props.margin == "number"
                ? `${(props.margin ?? 0) / 4}rem`
                : `${(props.margin?.top ?? 0) / 4}rem ${
                    (props.margin?.right ?? 0) / 4
                  }rem ${(props.margin?.bottom ?? 0) / 4}rem ${
                    (props.margin?.left ?? 0) / 4
                  }rem`,
            gap: `${(props.gap ?? 0) / 4}rem`,
          }}
        >
          {props.children}
        </div>
      </div>
      {props.trailing}
      {props.bottomAppBar}
    </div>
  );
}
