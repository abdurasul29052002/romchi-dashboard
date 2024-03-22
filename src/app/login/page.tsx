'use client'

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@/components/ui/CustomButton";
import { logoIcon } from "@/assets";
import { login } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import axiosNew from "@/app/api/axios";

const Login = () => {
  const router = useRouter();
  axiosNew
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const requestData = {
      "phoneNumber": values.phoneNumber,
      "smsCode": values.password
    }
    try {
      login(requestData)
        .then(response =>{
          if (response.token){
            localStorage.setItem("token", response.token)
            router.push("/dashboard")
          }
        })
      // const { data } = await axios.post("/api/auth/auth", values);
      // if (data.success) {
      //   localStorage.setItem("access_token", data.token);
      //   const userToken = localStorage.getItem("access_token");
      //   const encodedData = userToken?.split(".")[1];
      //   const { role } = JSON.parse(atob(encodedData || ""));
      //   localStorage.setItem("role", role);
      //   window.location.reload();
      // }
    } catch (error: any) {
      // toast({
      //   title: error?.response?.data?.message,
      //   variant: "destructive",
      //   action: <ToastAction altText="Try again">Qayta urinish</ToastAction>,
      // });
    }
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "+998",
      password: ""
    }
  })

  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <img className={"w-[200px] h-[200px]"} src={logoIcon} alt="" />
      <div className={"flex flex-col justify-center items-center"}>
        <h2 className="font-bold font-sans text-3xl text-blue">
          Romchi admin paneliga xush kelibsiz
        </h2>

      </div>

      <div className={"flex flex-col justify-center items-center shadow-xl shadow-gray"}>
        <p className="text-gray pt-5">
          Tizimga kirish
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="pt-5 px-[48px] pb-[15px] flex flex-col justify-center items-center gap-[30px]"
          >
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      {...field}
                      className="w-[400px]"
                      maxLength={13}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton
              classNames="bg-blue rounded-xl w-[100px] h-[50px]"
              mainable
              type="submit"
              label={"Log in"}
            />
          </form>
        </Form>
      </div>


    </div>
  );
}

export default Login