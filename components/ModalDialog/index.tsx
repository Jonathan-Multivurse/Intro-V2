import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, PropsWithChildren } from "react";
import { Circle, X } from "phosphor-react";
import Button from "../Button";
import CircularButton from "../Circular";

type ModalDialogProps = PropsWithChildren<{
  titleClass?: string;
  className?: string;
  title: string;
  show: boolean;
  onClose: () => void;
}>;

const ModalDialog: FC<ModalDialogProps> = ({
  title,
  titleClass,
  className,
  show,
  onClose,
  children,
}: ModalDialogProps) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all
                    ${className ?? ""}
                    `}
                >
                  <div className="flex flex-row justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className={
                        "text-lg font-medium leading-6 text-gray-900" +
                        (titleClass ?? "")
                      }
                    >
                      {title}
                    </Dialog.Title>
                    <CircularButton
                      icon={<X size={25} color="#fff" weight="bold" />}
                      onPressed={onClose}
                      bgColor={"red"}
                    />
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalDialog;
