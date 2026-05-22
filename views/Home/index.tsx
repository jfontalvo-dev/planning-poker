"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useRoomCreation, useLandingForm } from "./hooks";
import { useLocalStorage, useAlert } from "@hooks";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CTAFormSection,
  Footer,
  JoinModal,
} from "./components";

export const Home: React.FC = () => {
  const router = useRouter();
  const { user: storedUser, roomId: savedRoomId } = useLocalStorage();
  const { addAlert } = useAlert();
  const { isLoading, handleCreateRoom, handleJoinRoom } =
    useRoomCreation(addAlert);
  const [defaultUserName, setDefaultUserName] = useState("");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (storedUser?.userName) {
      setDefaultUserName(storedUser.userName);
    }
  }, [storedUser]);

  useEffect(() => {
    if (savedRoomId && storedUser) {
      router.push(`/room/${savedRoomId}`);
    }
  }, [savedRoomId, storedUser, router]);

  const {
    userName,
    roomId,
    errors,
    handleCreateRoom: onCreateRoom,
    handleJoinRoom: onJoinRoom,
    handleUserNameChange,
    handleRoomIdChange,
    switchToHome,
  } = useLandingForm({
    onCreateRoom: handleCreateRoom,
    onJoinRoom: handleJoinRoom,
    defaultUserName,
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
    switchToHome();
  };

  return (
    <div className="min-h-screen font-poppins bg-linear-to-br from-neutral-900 via-primary-900 to-neutral-900 overflow-x-hidden">
      <HeroSection
        onScrollToForm={scrollToForm}
        onOpenJoinModal={() => setShowJoinModal(true)}
      />
      <FeaturesSection />
      <HowItWorksSection />
      <CTAFormSection
        ref={formRef}
        userName={userName}
        errors={errors}
        isLoading={isLoading}
        isUserStored={!!storedUser}
        onUserNameChange={handleUserNameChange}
        onCreateRoom={onCreateRoom}
        onOpenJoinModal={() => setShowJoinModal(true)}
      />
      <Footer />

      {showJoinModal && (
        <JoinModal
          userName={userName}
          roomId={roomId}
          errors={errors}
          isLoading={isLoading}
          isUserStored={!!storedUser}
          onUserNameChange={handleUserNameChange}
          onRoomIdChange={handleRoomIdChange}
          onJoinRoom={onJoinRoom}
          onClose={closeJoinModal}
        />
      )}
    </div>
  );
};
