type IllustrationBannerProps = {
  illustration: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export default function IllustrationBanner(props: IllustrationBannerProps) {
  return (
    <div className="bg-primary-0 rounded-t-3xl pt-6 md:pt-12 pb-3 md:pb-6 md:max-h-[30vh] max-h-[20vh] overflow-hidden flex justify-center">
      <img src={props.illustration} className="w-auto h-auto" />
    </div>
  );
}
