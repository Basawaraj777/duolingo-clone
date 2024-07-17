import { auth } from "@clerk/nextjs/server";

const allowedId = ["user_2jBMIC7a7KyzbJIZHsX11qVnW0g"];

export const isAmdin = () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  return allowedId.indexOf(userId) !== -1;
};
