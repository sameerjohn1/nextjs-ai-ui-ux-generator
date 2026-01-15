import { NextRequest, NextResponse } from "next/server";
import { openrouter } from "@/config/openRouter";
import { GENERATE_SCREEN_PROMPT } from "@/data/Prompt";
import { db } from "@/config/db";
import { ScreenConfigTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const {
    projectId,
    screenId,
    screenName,
    purpose,
    screenDescription,
    projectVisualDescription,
  } = await req.json();

  const userInput = `
  screen name is: ${screenName},
  screen purpose: ${purpose},
  screen Description: ${screenDescription},
  `;

  try {
    const aiResult = await openrouter.chat.send({
      model: "nvidia/nemotron-3-nano-30b-a3b:free",
      //   qwen/qwen3-coder:free

      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: GENERATE_SCREEN_PROMPT,
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: userInput,
            },
          ],
        },
      ],
      stream: false,
    });

    const code = aiResult?.choices[0]?.message?.content;
    const updateResult = await db
      .update(ScreenConfigTable)
      .set({
        code: code as string,
      })
      .where(
        and(
          eq(ScreenConfigTable.projectId, projectId),
          eq(ScreenConfigTable?.screenId, screenId as string)
        )
      )
      .returning();

    return NextResponse.json(updateResult[0]);
  } catch (error) {
    return NextResponse.json({ msg: "Internal Server Error" });
  }
}
