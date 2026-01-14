"use client";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/modal";
import { Divider } from "@heroui/react";
import { Code } from "@heroui/react";
import { LinkedinIcon, ModalIcon, SadIcon } from "@/components/icons";
import { ContactForm, ContactFormData } from "@/components/contact-form";
import { siteConfig } from "@/config/site";
import { useRef } from "react";

export function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formRef = useRef<ContactFormData>({ email: "", message: "" });

  const handleSubmit = () => {
    if (formRef.current.email && formRef.current.message) {
      alert("Message sent!");
      onClose();
    }
  };

  const handleFormSubmit = (data: ContactFormData) => {
    formRef.current = data;
  };

  return (
    <footer className="w-full flex items-center justify-center gap-4 py-3">
      <Button
        onPress={onOpen}
        startContent={<ModalIcon />}
        color="secondary"
        variant="flat"
        className="text-sm font-normal "
      >
        Contact Me
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex gap-2">Send a Message<Code color="danger" className="flex gap-2">WIP <SadIcon /></Code></ModalHeader>
          <ModalBody>
            <ContactForm onSubmit={handleFormSubmit} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              variant="flat"
              onPress={handleSubmit}
              isDisabled={!formRef.current?.email || !formRef.current?.message}
            >
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </footer>
  );
}