import type { SurpriseContent } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";

const flowers = ["🌷", "🌿", "🌹", "🌺", "🌸"];

export function TimelineSection({
  timeline,
}: {
  timeline: SurpriseContent["timeline"];
}) {
  return (
    <section id="timeline" className="relative bg-paper py-16 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="serif text-4xl font-medium text-coffee md:text-5xl">
            {timeline.title}
          </h2>
          <div className="mx-auto mt-3 flex max-w-24 items-center justify-center gap-2 text-leaf">
            <span className="h-px flex-1 bg-leaf/35" />
            <span>❧</span>
            <span className="h-px flex-1 bg-leaf/35" />
          </div>
        </div>

        <div className="timeline-branch mt-16">
          {timeline.events.map((event, index) => (
            <article
              key={`${event.displayDate ?? event.date}-${event.title}`}
              className="timeline-event"
            >
              <span className="timeline-flower" aria-hidden>
                {flowers[index % flowers.length]}
              </span>
              <span className="timeline-dot" aria-hidden />
              <h3 className="mt-4 text-sm font-bold text-coffee">
                {event.title}
              </h3>
              {event.displayDate ? (
                <p className="mt-1 text-xs text-earth">{event.displayDate}</p>
              ) : null}
              <p className="mt-2 text-xs leading-5 text-earth/82">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

