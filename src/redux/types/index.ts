export const RequestStatus = {
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
} as const;

export type RequestStatusType = keyof typeof RequestStatus;
