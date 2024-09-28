import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const database = await db();

    const query = "UPDATE todo SET status = ? WHERE id = ?";
    await database.query(query, [2, params.id]);

    return NextResponse.json({
      message: `Todo with id ${params.id} updated successfully`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: { id: number } }
) => {
  try {
    const database = await db();
    const query = "DELETE from todo WHERE id = ?";
    await database.query(query, [params.id]);
    return NextResponse.json({
      message: `Todo with id ${params.id} deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
