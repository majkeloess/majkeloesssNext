import { z } from "zod";

const totalsSchema = z.object({
  count: z.number(),
  distance: z.number(),
  moving_time: z.number(),
  elapsed_time: z.number(),
  elevation_gain: z.number(),
});

const recentTotalsSchema = totalsSchema.extend({
  achievement_count: z.number(),
});

export const stravaStatsSchema = z.object({
  biggest_ride_distance: z.number(),
  biggest_climb_elevation_gain: z.number(),
  recent_ride_totals: recentTotalsSchema,
  all_ride_totals: totalsSchema,
  recent_run_totals: recentTotalsSchema,
  all_run_totals: totalsSchema,
  recent_swim_totals: recentTotalsSchema,
  all_swim_totals: totalsSchema,
  ytd_ride_totals: totalsSchema,
  ytd_run_totals: totalsSchema,
  ytd_swim_totals: totalsSchema,
});

export type StravaStats = z.infer<typeof stravaStatsSchema>;
