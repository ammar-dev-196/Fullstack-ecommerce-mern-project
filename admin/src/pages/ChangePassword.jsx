import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function ChangePassword({ className, ...props }) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="py-10">
            <CardHeader className="text-center">
              <CardTitle className="text-[18px]">
                Change Your Password
              </CardTitle>
              <CardDescription>
                Enter New Password below to reset password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">New Password</FieldLabel>
                    <Input type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Confirm Password</FieldLabel>
                    <Input type="password" required />
                  </Field>

                  <Field>
                    <Button type="submit">Change Password</Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
