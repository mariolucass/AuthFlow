import { Control } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

type LoginType = z.infer<typeof loginSchema>;

interface IPropsFormFieldComponent {
  control: Control<LoginType>;
  name: "email" | "password";
}

export const FormFieldComponent = ({
  control,
  name,
}: IPropsFormFieldComponent) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</FormLabel>

          <FormControl>
            <Input placeholder={name} {...field} />
          </FormControl>

          <FormDescription>This is your {name}.</FormDescription>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
