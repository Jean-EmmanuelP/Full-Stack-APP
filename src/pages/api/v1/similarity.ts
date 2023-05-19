import { withMethods } from "@/lib/api-middlewares/with-methods";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const reqSchema = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;

  const apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const parsed = reqSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Bad Request" });
  }

  try {
    const { text1, text2 } = reqSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default withMethods(["POST"], handler);
