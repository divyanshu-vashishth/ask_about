
import AuthButton from "@/components/AuthButton";


export default async function Index() {


  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <h1 className="text-4xl font-bold">Ask About</h1>
        <p className="text-lg text-foreground/60">
          Ask About is a Q&A platform where you can ask questions and get answers from the community.
        </p>
        <p className="text-lg text-foreground/60">
          To get started, login or sign up.
        </p>
        <p>
          Go to `/ssrcountries/id/1` to see the country with server side rendering feature.
        </p>
        <p> 
          Go to `/countries/id/1` to see the country without server side rendering feature or with client side rendering feature.
        </p>
        </div>
    </div>
  );
}
