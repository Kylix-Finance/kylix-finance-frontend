"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { createContact } from "~/api/contact";
import Button from "~/components/Button";
import Section from "~/components/Section";

const WaitingList = () => {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      setIsSuccess(false);
      return;
    }

    setIsPending(true);
    setError("");
    setIsSuccess(false);

    try {
      await createContact(email);
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      if (
        err ===
        "Unable to create contact, email is already associated with another Contact"
      ) {
        setError("Email already registered!");
      } else {
        setError("An unexpected error occurred.");
      }
      setIsSuccess(false);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Section
        heading={{
          left: "Join",
          right: "our waiting list",
        }}
        contentClassName="py-9 md:py-9 lg:py-9  gap-5  backdrop-blur-md border border-primary-900 rounded-2xl"
        className="mb-44"
        description={"Stay tuned with the latest updates."}
        id="#waiting-list"
      >
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="flex items-center justify-center gap-2.5 h-full">
            <div className="relative w-full h-full  rounded-lg ">
              <div className="absolute w-full h-full backdrop-blur-sm rounded-lg pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={onChangeHandler}
                placeholder="Enter your email address"
                className="relative h-full w-full px-4 py-2 bg-transparent text-gray-300 placeholder-gray-500 border-none rounded-md  outline-none shadow-primary-500 shadow-inner"
              />
            </div>

            <Button color="secondary" type="submit">
              {isPending ? "loading..." : "Join"}
            </Button>
          </div>
          {error && <span className="text-red-500">{error}</span>}
          {isSuccess && (
            <span className="text-primary-500">
              you successfully joined kylix waitlist
            </span>
          )}
          <p className="font-normal text-white/40 text-xs leading-5 text-center tracking-wider mt-6">
            By submitting your email address, you agree to join Kylix waitlist
            and newsletter{" "}
          </p>
        </form>
      </Section>
    </div>
  );
};

export default WaitingList;
