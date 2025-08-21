"use client";
import { button as buttonStyles } from "@heroui/theme";
import React from "react";
import { Input, Textarea } from "@heroui/react";

export interface ContactFormData {
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    onSubmit({ email, message });
  }, [email, message, onSubmit]);

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <Input
        isRequired
        isClearable
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"
        labelPlacement="outside"
        value={email}
        onValueChange={setEmail}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid ? "Please enter a valid email" : ""}
        isInvalid={isInvalid}
        variant="flat"
      />
      <Textarea
        name="message"
        label="Message"
        placeholder="Your message"
        labelPlacement="outside"
        isClearable
        isRequired
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        minRows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};