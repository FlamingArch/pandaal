import { AppBarProps } from "../types/appBar";
import appBarStylesClasses from "../tailwind/appBar";

export default function AppBar({
  leading,
  title,
  center,
  actions,
  heading,
  primary,
  children,
  responsive,
  sticky,
  backdrop,
  background,
  className,
  cornerRadius,
  padding,
  margin,
  gap,
  style,
  classNames,
  styles,
}: AppBarProps) {
  const containerStyles = {
    borderRadius:
      typeof cornerRadius == "number"
        ? `${cornerRadius / 4}rem`
        : `${(cornerRadius?.topLeft ?? 0) / 4}rem ${
            (cornerRadius?.topRight ?? 0) / 4
          }rem ${(cornerRadius?.bottomLeft ?? 0) / 4}rem ${
            (cornerRadius?.bottomRight ?? 0) / 4
          }rem`,
    padding:
      typeof padding == "number"
        ? `${(padding ?? 6) / 4}rem`
        : `${(padding?.top ?? 6) / 4}rem ${(padding?.right ?? 6) / 4}rem ${
            (padding?.bottom ?? 6) / 4
          }rem ${(padding?.left ?? 6) / 4}rem`,
    margin:
      typeof margin == "number"
        ? `${(margin ?? 0) / 4}rem`
        : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
            (margin?.bottom ?? 0) / 4
          }rem ${(margin?.left ?? 0) / 4}rem`,
    gap: gap ?? `1rem`,
    ...styles?.container,
  };

  const responsiveStylesContainer = responsive
    ? "flex-grow md:flex-grow-0 md:w-2/3 lg:w-1/2"
    : "";
  const responsiveStylesRoot = responsive ? "flex md:justify-center" : "";

  const stickyStyles = sticky
    ? `sticky ${sticky == "bottom" ? "bottom-0" : "top-0"}`
    : "";

  const toolbar = (
    <section
      style={{ gap: gap ?? `1rem` }}
      className={`${`${appBarStylesClasses.toolbar} ${classNames?.toolbar}`} ${
        classNames?.toolbar
      }`}
    >
      <div
        style={{ gap: gap, ...styles?.leading }}
        className={`${appBarStylesClasses.leading} ${classNames?.leading}`}
      >
        {leading}
      </div>
      <div
        style={{ gap: gap, ...styles?.title }}
        className={`${appBarStylesClasses.title} ${classNames?.title}`}
      >
        {title}
      </div>
      <div
        style={{ gap: gap, ...styles?.center }}
        className={`${appBarStylesClasses.center} ${classNames?.center}`}
      >
        {center}
      </div>
      <div
        style={{ gap: gap ?? "1rem", ...styles?.actions }}
        className={`${appBarStylesClasses.actions} ${classNames?.actions}`}
      >
        {actions}
      </div>
    </section>
  );

  const primaryBar = (
    <section
      style={{ gap: gap ?? `1rem`, ...styles?.primaryBar }}
      className={`${appBarStylesClasses.primaryBar} ${classNames?.primaryBar}`}
    >
      <h3
        style={{
          gap: gap ?? `1rem`,
          ...styles?.heading,
          padding: `0.75rem`,
        }}
        className={`${appBarStylesClasses.heading} ${classNames?.heading}`}
      >
        {heading}
      </h3>
      <main
        style={{ gap: gap ?? `1rem`, ...styles?.primary }}
        className={`${appBarStylesClasses.primary} ${classNames?.primary}`}
      >
        {primary}
      </main>
    </section>
  );

  return (
    <header
      style={{
        ...styles?.root,
        ...style,
      }}
      className={`${appBarStylesClasses.root} ${
        classNames?.root
      } ${className} ${responsiveStylesRoot} ${stickyStyles} ${
        sticky === "bottom"
          ? appBarStylesClasses.backdrop[backdrop ?? "material"].replace(
              "bg-gradient-to-b ",
              "bg-gradient-to-t "
            )
          : appBarStylesClasses.backdrop[backdrop ?? "material"]
      }`}
    >
      <div
        style={containerStyles}
        className={`${appBarStylesClasses.container} ${
          classNames?.container
        } ${responsiveStylesContainer} ${
          sticky === "bottom"
            ? appBarStylesClasses.backdrop[background ?? "clear"].replace(
                "bg-gradient-to-b ",
                "bg-gradient-to-t "
              )
            : appBarStylesClasses.backdrop[background ?? "clear"]
        }}`}
      >
        {(leading || title || center || actions) && toolbar}
        {(heading || primary) && primaryBar}
        {children && children}
      </div>
    </header>
  );
}
