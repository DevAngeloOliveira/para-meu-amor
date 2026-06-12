import type { SurpriseContent } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function PhotoGallery({
  gallery,
}: {
  gallery: SurpriseContent["gallery"];
}) {
  return (
    <section id="gallery" className="relative bg-paper py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-love">
              {gallery.eyebrow}
            </p>
            <h2 className="serif mt-4 text-4xl font-medium leading-tight text-coffee md:text-5xl">
              {gallery.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-earth">
              {gallery.description}
            </p>
            <a
              href="#letter"
              className="mt-7 inline-flex min-h-11 items-center border border-love/35 px-5 text-xs font-semibold text-earth transition hover:border-love hover:text-love"
            >
              Ver mais momentos <span className="ml-4" aria-hidden>›</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {gallery.photos.slice(0, 5).map((photo, index) => (
              <figure key={`${photo.url}-${index}`} className="group">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.alt}
                  className="h-[270px] w-full border border-earth/10 object-cover shadow-[0_16px_36px_rgba(91,58,41,0.12)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_rgba(91,58,41,0.18)] lg:h-[260px]"
                />
                {photo.caption ? (
                  <figcaption className="mt-3 text-xs font-semibold text-earth/75">
                    {photo.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

