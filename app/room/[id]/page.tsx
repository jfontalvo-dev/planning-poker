"use client";

import { useParams } from "next/navigation";
import { Room } from "@views/Room";

export default function RoomPage() {
  const params = useParams();
  const roomId = params.id as string;

  return <Room roomId={roomId} />;
}
