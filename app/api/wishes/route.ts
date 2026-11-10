import { wishes } from "../../card-config";
import { getMongoClient } from "../../../lib/mongodb";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const selectedWish = wishes.find((wish) => wish.id === body.wishId);

  if (!selectedWish) {
    return Response.json({ error: "Unknown wish." }, { status: 400 });
  }

  const recipient =
    typeof body.recipient === "string" ? body.recipient.trim().slice(0, 100) : "";
  const sender =
    typeof body.sender === "string" ? body.sender.trim().slice(0, 100) : "";

  try {
    const client = await getMongoClient();
    const database = client.db(process.env.MONGODB_DB || "hbbdtv");
    const result = await database.collection("wish_selections").insertOne({
      wishId: selectedWish.id,
      wishTitle: selectedWish.title,
      recipient,
      sender,
      createdAt: new Date(),
    });

    return Response.json({ success: true, id: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error("Failed to save wish selection:", error);
    return Response.json(
      { error: "Could not save the wish selection. Check the MongoDB connection." },
      { status: 500 }
    );
  }
}
