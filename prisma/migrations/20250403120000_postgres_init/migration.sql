-- CreateTable
CREATE TABLE "feebacks" (
    "feedback_id" TEXT NOT NULL,
    "feedback" TEXT DEFAULT '',
    "link" TEXT DEFAULT '',
    "initials" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feebacks_pkey" PRIMARY KEY ("feedback_id")
);
