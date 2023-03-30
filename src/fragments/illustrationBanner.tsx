type IllustrationBannerProps = {
  illustration: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

export default function IllustrationBanner(props: IllustrationBannerProps) {
  return (
    <div className="bg-primary-50 rounded-t-2xl pt-12 pb-6 max-h-[30vh] overflow-hidden flex justify-center">
      <img src={props.illustration} className="w-auto h-auto" />
    </div>
  );
}
