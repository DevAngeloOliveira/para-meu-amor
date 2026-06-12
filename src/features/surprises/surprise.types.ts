import type { z } from "zod";
import type {
  musicProviderSchema,
  surpriseContentSchema,
  surpriseSchema,
} from "./surprise.schema";

export type MusicProvider = z.infer<typeof musicProviderSchema>;
export type SurpriseContent = z.infer<typeof surpriseContentSchema>;
export type Surprise = z.infer<typeof surpriseSchema>;
export type SurpriseMusic = SurpriseContent["music"];
export type SurprisePhoto = SurpriseContent["gallery"]["photos"][number];
export type TimelineEvent = SurpriseContent["timeline"]["events"][number];
