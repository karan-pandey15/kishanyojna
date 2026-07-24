import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
};

export default function PageHero({
  title,
  subtitle,
  image,
  alt = "",
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[32vh] items-center justify-center overflow-hidden sm:min-h-[38vh] md:min-h-[44vh]">
      <Image
        src={image}
        alt={alt || title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/80 via-brand-green/72 to-brand-green-deep/88" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold leading-tight text-white drop-shadow sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/92 sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
