import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "First name must be at least 3 characters",
          }),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "Last name must be at least 3 characters",
          }),
    address1:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .max(50, { message: "Address must not exceed 50 characters" }),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .max(50, { message: "City name must not exceed 50 characters" }),
    state:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(2, { message: "State must be exactly 2 characters" })
            .max(2, { message: "State must be exactly 2 characters" }),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, {
              message: "Postal code must be at least 3 characters",
            })
            .max(6, { message: "Postal code must not exceed 6 characters" }),
    dateOfBirth:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "Please enter a valid date",
          }),
    ssn:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "SSN must be at least 3 characters" }),

    email: z.string().email({ message: "Please enter a valid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

export function extractCustomerIdFromUrl(url: string) {
  // Split the URL string by '/'
  const parts = url.split("/");

  // Extract the last part, which represents the customer ID
  const customerId = parts[parts.length - 1];

  return customerId;
}
