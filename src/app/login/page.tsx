import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";


export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center md:h-screen">
      <div className="p-4 relative max-w-[400px] w-full mx-auto flex flex-col space-y-3 md:-mt-32">
        <div className="h-20 md:h-36 p-4 flex items-end bg-green-500 rounded-lg">
          <div className="w-32 md:w-36 text-white">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
 

