import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const database = await db();
    const query = "SELECT * from todo ORDER BY status ASC";
    const [todos] = await database.query(query);
    return NextResponse.json(todos);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req: NextRequest) {
  try {
    const database = await db();
    const body = await req.json();
    const data = {
      title: body.title,
      status: 1,
    };

    const query = "INSERT INTO todo (title, status) VALUES (?, ?)";
    const [result] = await database.query(query, [data.title, data.status]);
    const id = result.insertId;
    console.log(result);
    const [rows] = await database.query("SELECT * FROM todo WHERE id = ?", [
      id,
    ]);

    return NextResponse.json({
      message: "Todo added successfully",
      data: rows,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
