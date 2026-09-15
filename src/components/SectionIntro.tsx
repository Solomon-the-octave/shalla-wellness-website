import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

/* Label + heading + intro paragraph used at the top of most sections. */
export default function SectionIntro({
  eyebrow,
  title,
  text,
  center = false,
  as = "h2",
  className = "",
}: Props) {
  const Heading = as;

  return (
    <Reveal
      direction="up"
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <p className={`section-label mb-4 ${center ? "center" : ""}`}>{eyebrow}</p>

      <Heading
        className={`font-serif font-semibold tracking-tight text-ink ${
          as === "h1"
            ? "text-[2.35rem] leading-[1.08] sm:text-5xl md:text-6xl"
            : "text-[1.9rem] leading-[1.15] sm:text-4xl md:text-5xl"
        }`}
      >
        {title}
      </Heading>

      {text && (
        <p className="mt-5 text-base leading-8 text-body sm:text-lg">{text}</p>
      )}
    </Reveal>
  );
}
