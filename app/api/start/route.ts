export async function GET() {
  return Response.json({
    message:
      "🎮 Aha! You found me! Welcome to the super secret dev challenge entrance! Ready for adventure? POST your name and favorite coding language to /api/challenge1 and let the games begin! No pressure... but don't mess this up! 😉",
    hint: "Complete all challenges and you'll unlock the hidden treasure route that only the coolest developers can access... Are you cool enough?",
    disclaimer:
      "Psst! Your secrets are safe with me - I'm not storing your name or selling it to ninja hackers. I don't even have a database! How's that for security? 🕵️",
  });
}
