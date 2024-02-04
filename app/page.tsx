
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-right items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>   
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <h1 className="text-4xl font-bold">Ask About</h1>
        <p className="text-lg text-foreground/60">
          Ask About is a Q&A platform where you can ask questions and get answers from the community.
        </p>
        <p className="text-lg text-foreground/60">
          To get started, login or sign up.
        </p>
        </div>
    </div>
  );
}