import { ApiKey } from "@prisma/client";
import { type ZodIssue } from "zod";

export interface CreateApiData {
  error: string | zodIssue[] | null;
  createdApiKey: ApiKeyy | null;
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}
