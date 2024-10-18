import { PaymentTransferFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { console } from "inspector";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(4, "Transfer note is too short"),
  amount: z.string().min(4, "Amount is too short"),
  senderBank: z.string().min(4, "Please select a valid bank account"),
  shareableId: z.string().min(8, "Please select a valid sharable Id"),
});

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        amount: "",
        senderBank: "",
        shareableId: "",
    },
  });

  const submit = async (data: z.infer<typeof formSchema>) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col"
      ></form>
    </Form>
  );
};

export default PaymentTransferForm;
