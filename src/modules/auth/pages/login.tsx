import FormLogin from "@/modules/auth/components/form-login";
import BrandLogo from "@/components/icon/logo";

export default function LoginPage(){
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 h-screen px-2">
      <BrandLogo />
      <FormLogin className="w-full sm:w-5/6 md:w-2/3 lg:w-1/3 xl:w-1/4"/>
    </div>
  )
}