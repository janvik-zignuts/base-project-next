"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface AlertDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  description?: string;
  actionLabel?: string;
  cancelLabel?: string;
}

export function AlertDialog({
  title,
  description,
  actionLabel = "Confirm",
  cancelLabel = "Cancel",
  isOpen,
  onClose,
  onConfirm,
}: AlertDialogProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="center">
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader>{title}</ModalHeader>

            <ModalBody>
              {description && <p>{description}</p>}
            </ModalBody>

            <ModalFooter>
              <Button variant="flat" onPress={close}>
                {cancelLabel}
              </Button>

              <Button color="danger" onPress={onConfirm}>
                {actionLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
