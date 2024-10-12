import React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              type={name === "password" ? "password" : "text"}
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
