"use client";
import { useState } from "react";
import FirstStep from "./firstStep";
import SecondStep from "./bookForm";
import Confirmation from "./confirmation";
import Steps from "./steps";
import { useRouter } from "next/navigation";

type Service = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  note: string;
};

const BookSession = () => {
  const router = useRouter()
  const [step, setStep] = useState(1);
  const [service, setService] = useState<Service | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const canGoNext =
    (step === 1 && service && service.name) ||
    (step === 2 && user && user.name && user.email) ||
    step === 3;

  const next = async () => {
    if (!canGoNext) return;

    if (step < 3) {
      setStep((p) => p + 1);
    } else {
      // Step 3: Send booking to API
      if (!service || !user) return;

      setStatus("sending");
      try {
        const payload = {
            service: {
            name: service.name,
            description: service.description,
            },
            user,
        };
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data.message || "Failed to send booking.");
          
        } else {
          setStatus("success");
          setTimeout(()=>{router.push("/")},1500)
        }
      } catch (err: any) {
        setStatus("error");
        setErrorMessage(err.message || "Failed to send booking.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 md:gap-20 w-3/4 m-auto">
      {/* Steps UI */}
      <Steps step={step} />

      {/* Step content */}
      {step === 1 && <FirstStep returnService={setService} />}
      {step === 2 && <SecondStep returnUser={setUser} />}
      {step === 3 && (
        <div className="flex flex-col items-center gap-6">
          <Confirmation service={service} user={user} />
          {status === "sending" && <p>Sending your booking...</p>}
          {status === "success" && <p className="text-green-600">Booking sent successfully!</p>}
          {status === "error" && <p className="text-red-500">{errorMessage}</p>}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center gap-5 md:gap-10">
        {step !== 1 && (
          <button
            onClick={() => setStep((p) => p - 1)}
            className="!bg-[var(--light)] !text-[var(--main)]"
          >
            Back
          </button>
        )}

        <button
          onClick={next}
          disabled={!canGoNext || status === "sending"}
          className={`${!canGoNext || status === "sending" ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          {step === 3 ? "Send" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default BookSession;
