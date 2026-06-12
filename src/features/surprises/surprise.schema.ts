import { z } from "zod";

const photoSchema = z.object({
  url: z.string().url().optional(),
  caption: z.string().optional(),
  alt: z.string().min(1),
});

const timelineEventSchema = z.object({
  date: z.string().optional(),
  displayDate: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const musicProviderSchema = z.enum([
  "youtube_music",
  "youtube",
  "spotify",
  "external",
]);

export const surpriseContentSchema = z.object({
  coupleName: z.string().min(1),
  senderName: z.string().min(1),
  recipientName: z.string().min(1),
  relationshipStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  hero: z.object({
    eyebrow: z.string().optional(),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    primaryActionLabel: z.string().min(1),
    secondaryActionLabel: z.string().min(1),
  }),
  counter: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  letter: z.object({
    badge: z.string().min(1),
    title: z.string().min(1),
    message: z.string().min(1),
    signature: z.string().min(1),
  }),
  gallery: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    photos: z.array(photoSchema).min(1),
  }),
  music: z.object({
    provider: musicProviderSchema,
    badge: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    artist: z.string().optional(),
    url: z.string().url(),
    resourceId: z.string().optional(),
    spotifyType: z
      .enum(["track", "album", "playlist", "episode", "show", "artist"])
      .optional(),
    embed: z.boolean().optional(),
  }),
  timeline: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    events: z.array(timelineEventSchema).min(1),
  }),
  finalMessage: z.object({
    badge: z.string().min(1),
    title: z.string().min(1),
    message: z.string().min(1),
  }),
  share: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  settings: z.object({
    showCounter: z.boolean().default(true),
    showGallery: z.boolean().default(true),
    showMusic: z.boolean().default(true),
    showTimeline: z.boolean().default(true),
    showFinalMessage: z.boolean().default(true),
    showShare: z.boolean().default(true),
    animationLevel: z.enum(["none", "soft", "rich"]).default("soft"),
  }),
});

export const surpriseSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  theme: z.string(),
  content: surpriseContentSchema,
  is_active: z.boolean(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});
