/* eslint-disable react/jsx-no-bind */
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiCommand } from "react-icons/fi";

import AlgoliaSearch from "@/components/shared/search/AlgoliaSearch/AlgoliaSearch";

const CommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className="relative flex items-center justify-between gap-2 rounded-md border-2 border-neutral-200/10 bg-slate-900 px-3 py-2 text-sm text-gray-300 sm:w-44"
        onClick={openModal}
        aria-label="Open Search Menu"
      >
        <div className="flex  items-center gap-2">
          <FaSearch />
          <span className="hidden sm:block">Search...</span>
        </div>
        <kbd className="hidden items-center gap-1 rounded-sm border border-neutral-200/10 bg-midnight px-1 font-mono font-medium sm:flex">
          <FiCommand className="h-3 w-3" />
          <span className="text-xs">K</span>
        </kbd>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center overflow-auto text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-screen transform rounded bg-midnight text-start align-middle transition-all">
                  <div className="relative h-full py-12 sm:px-12 md:px-24 lg:px-48">
                    <div className="flex h-full flex-col">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="text-med inline-flex items-center justify-center gap-1 rounded px-3 py-3 font-semibold uppercase leading-none text-gray-200 focus:outline-none focus:ring-0"
                          aria-label="Close Command Menu"
                        >
                          <span>Close</span>
                          <XMarkIcon
                            className="h-5 w-5 transition-all"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="mt-6 h-full">
                        <AlgoliaSearch closeModal={closeModal} />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CommandMenu;
