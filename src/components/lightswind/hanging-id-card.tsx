"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   PHYSICS
========================================================= */

const SPRING_K = 0;
const DAMPING = 0.92;
const GRAVITY = 3000;
const MASS = 1;

interface CardPhysicsState {
  angle: number;
  vel: number;
}

/* =========================================================
   PROPS
========================================================= */

export interface HangingIdCardProps {
  imageSrc: string;
  imageAlt?: string;

  ropeLength?: number;
  ropeColor?: string;

  className?: string;
}

/* =========================================================
   LANYARD
========================================================= */

function Lanyard({
  length,
  color,
}: {
  length: number;
  color: string;
}) {
  const clampY = length;
  const ringY = length + 10;
  const hookY = length + 18;

  return (
    <svg
      width="44"
      height={length + 38}
      viewBox={`0 0 44 ${length + 38}`}
      aria-hidden="true"
      className="mx-auto block overflow-visible"
    >
      <defs>
        {/* Metal */}

        <linearGradient
          id="metalDark"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>

        {/* Gancho */}

        <linearGradient
          id="hookDark"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="40%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#3f3f46" />
        </linearGradient>

        {/* Textura da fita */}

        <linearGradient
          id="strapHighlight"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#000000"
            stopOpacity="0.45"
          />

          <stop
            offset="25%"
            stopColor="#ffffff"
            stopOpacity="0.12"
          />

          <stop
            offset="75%"
            stopColor="#ffffff"
            stopOpacity="0.05"
          />

          <stop
            offset="100%"
            stopColor="#000000"
            stopOpacity="0.5"
          />
        </linearGradient>
      </defs>

      {/* Fita principal */}

      <rect
        x="12"
        y="0"
        width="20"
        height={clampY + 4}
        rx="2"
        fill={color}
      />

      {/* Profundidade da fita */}

      <rect
        x="12"
        y="0"
        width="20"
        height={clampY + 4}
        rx="2"
        fill="url(#strapHighlight)"
      />

      {/* Costuras */}

      <line
        x1="13.5"
        y1="0"
        x2="13.5"
        y2={clampY + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />

      <line
        x1="30.5"
        y1="0"
        x2="30.5"
        y2={clampY + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />

      {/* Presilha metálica */}

      <rect
        x="10"
        y={clampY}
        width="24"
        height="10"
        rx="2.5"
        fill="url(#metalDark)"
        stroke="#18181b"
        strokeWidth="0.8"
      />

      {/* Rebites */}

      <circle
        cx="13.5"
        cy={clampY + 5}
        r="1.3"
        fill="#a1a1aa"
      />

      <circle
        cx="30.5"
        cy={clampY + 5}
        r="1.3"
        fill="#a1a1aa"
      />

      {/* Argola */}

      <path
        d={`
          M 15 ${clampY + 9}
          C 15 ${ringY + 6},
            29 ${ringY + 6},
            29 ${clampY + 9}
        `}
        fill="none"
        stroke="url(#metalDark)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Junta */}

      <rect
        x="19"
        y={ringY + 2}
        width="6"
        height="6"
        rx="1"
        fill="url(#metalDark)"
      />

      {/* Gancho */}

      <path
        d={`
          M 20 ${ringY + 7}
          L 20 ${hookY + 6}
          C 20 ${hookY + 15},
            24 ${hookY + 15},
            24 ${hookY + 6}
          L 24 ${ringY + 7}
        `}
        fill="none"
        stroke="url(#hookDark)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Trava */}

      <line
        x1="20.5"
        y1={hookY + 1}
        x2="20.5"
        y2={hookY + 10}
        stroke="#d4d4d8"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* =========================================================
   HANGING ID CARD
========================================================= */

export function HangingIdCard({
  imageSrc,
  imageAlt = "Foto de perfil",
  ropeLength = 140,
  ropeColor = "#18181b",
  className,
}: HangingIdCardProps) {
  /* =======================================================
     PHYSICS STATE
  ======================================================= */

  const physicsRef = useRef<CardPhysicsState>({
    angle: 0,
    vel: 0,
  });

  const animationFrameRef =
    useRef<number | null>(null);

  const previousTimeRef =
    useRef<number | null>(null);

  const previousAngleRef =
    useRef(0);

  const isDraggingRef =
    useRef(false);

  const dragStartXRef =
    useRef(0);

  const dragStartAngleRef =
    useRef(0);

  const [angle, setAngle] =
    useState(0);

  /* =======================================================
     PHYSICS LOOP
  ======================================================= */

  const tick = useCallback(
    (now: number) => {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = now;
      }

      const deltaTime = Math.min(
        (now - previousTimeRef.current) / 1000,
        0.05,
      );

      previousTimeRef.current = now;

      const physics = physicsRef.current;

      if (!isDraggingRef.current) {
        const pendulumLength =
          ropeLength + 100;

        const torque =
          -(GRAVITY / pendulumLength) *
          Math.sin(physics.angle) -
          (DAMPING / MASS) *
          physics.vel -
          (SPRING_K / MASS) *
          physics.angle;

        physics.vel +=
          torque * deltaTime;

        physics.angle +=
          physics.vel * deltaTime;

        setAngle(physics.angle);

        const isMoving =
          Math.abs(physics.angle) >
          0.001 ||
          Math.abs(physics.vel) >
          0.001;

        if (isMoving) {
          animationFrameRef.current =
            requestAnimationFrame(tick);
        } else {
          physics.angle = 0;
          physics.vel = 0;

          setAngle(0);
        }

        return;
      }

      if (deltaTime > 0) {
        physics.vel =
          (physics.angle -
            previousAngleRef.current) /
          deltaTime;
      }

      previousAngleRef.current =
        physics.angle;

      animationFrameRef.current =
        requestAnimationFrame(tick);
    },
    [ropeLength],
  );

  /* =======================================================
     START PHYSICS
  ======================================================= */

  const startPhysics =
    useCallback(() => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }

      previousTimeRef.current = null;

      animationFrameRef.current =
        requestAnimationFrame(tick);
    }, [tick]);

  /* =======================================================
     POINTER DOWN
  ======================================================= */

  const handlePointerDown =
    useCallback(
      (
        event: React.PointerEvent<HTMLDivElement>,
      ) => {
        event.currentTarget.setPointerCapture(
          event.pointerId,
        );

        isDraggingRef.current = true;

        dragStartXRef.current =
          event.clientX;

        dragStartAngleRef.current =
          physicsRef.current.angle;

        previousAngleRef.current =
          physicsRef.current.angle;

        if (animationFrameRef.current) {
          cancelAnimationFrame(
            animationFrameRef.current,
          );
        }

        previousTimeRef.current = null;

        animationFrameRef.current =
          requestAnimationFrame(tick);
      },
      [tick],
    );

  /* =======================================================
     POINTER MOVE
  ======================================================= */

  const handlePointerMove =
    useCallback(
      (
        event: React.PointerEvent<HTMLDivElement>,
      ) => {
        if (!isDraggingRef.current) {
          return;
        }

        const deltaX =
          event.clientX -
          dragStartXRef.current;

        const pendulumLength =
          ropeLength + 100;

        const newAngle =
          dragStartAngleRef.current -
          deltaX / pendulumLength;

        const clampedAngle =
          Math.max(
            -1.4,
            Math.min(1.4, newAngle),
          );

        physicsRef.current.angle =
          clampedAngle;

        setAngle(clampedAngle);
      },
      [ropeLength],
    );

  /* =======================================================
     POINTER UP
  ======================================================= */

  const handlePointerUp =
    useCallback(
      (
        event: React.PointerEvent<HTMLDivElement>,
      ) => {
        if (
          event.currentTarget.hasPointerCapture(
            event.pointerId,
          )
        ) {
          event.currentTarget.releasePointerCapture(
            event.pointerId,
          );
        }

        isDraggingRef.current = false;

        startPhysics();
      },
      [startPhysics],
    );

  /* =======================================================
     POINTER CANCEL
  ======================================================= */

  const handlePointerCancel =
    useCallback(() => {
      isDraggingRef.current = false;

      startPhysics();
    }, [startPhysics]);

  /* =======================================================
     CLICK IMPULSE
  ======================================================= */

  const handleCardClick =
    useCallback(() => {
      const physics =
        physicsRef.current;

      const isStopped =
        Math.abs(physics.vel) < 0.1 &&
        Math.abs(physics.angle) < 0.05;

      if (!isStopped) {
        return;
      }

      physics.vel = 4;

      startPhysics();
    }, [startPhysics]);

  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, []);

  const rotationDegrees =
    angle * (180 / Math.PI);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      className={cn(
        "flex select-none flex-col items-center",
        className,
      )}
      style={{
        touchAction: "none",
      }}
    >
      {/* ===================================================
          CEILING ANCHOR
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          relative
          z-10
          h-3.5
          w-3.5
          rounded-full
          border
          border-zinc-700
          bg-zinc-900
          shadow-md
        "
      />

      {/* ===================================================
          PENDULUM
      =================================================== */}

      <div
        className="
          flex
          cursor-grab
          flex-col
          items-center
          active:cursor-grabbing
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onClick={handleCardClick}
        style={{
          transform: `rotate(${rotationDegrees}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px",
        }}
      >
        {/* =================================================
            LANYARD
        ================================================= */}

        <div className="pointer-events-none">
          <Lanyard
            length={ropeLength}
            color={ropeColor}
          />
        </div>

        {/* =================================================
            CARD
        ================================================= */}

        <div
          className="
            pointer-events-none
            relative
            mt-[-16px]
            w-60
            overflow-hidden
            rounded-[1.4rem]

            border
            border-blue-500/40

            bg-zinc-950

            p-2.5

            shadow-2xl
            shadow-black/20

            transition-all
            duration-500
            ease-out

            dark:border-blue-400/40
            dark:bg-white
            dark:shadow-black/40

            sm:w-64
          "
        >
          {/* ===============================================
              ACCENT BAR
          =============================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              h-1
              w-full

              bg-gradient-to-r
              from-blue-500
              via-yellow-400
              to-blue-500
            "
          />

          {/* ===============================================
              TOP AREA
          =============================================== */}

          <div
            className="
              flex
              justify-center
              pb-2.5
              pt-1.5
            "
          >
            {/* Slot */}

            <div
              className="
                flex
                h-3
                w-10
                items-center
                justify-center
                rounded-full

                border
                border-zinc-700
                bg-black

                shadow-inner

                transition-all
                duration-500

                dark:border-zinc-300
                dark:bg-zinc-900
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1
                  w-7
                  rounded-full
                  bg-zinc-800

                  transition-colors
                  duration-500

                  dark:bg-zinc-700
                "
              />
            </div>
          </div>

          {/* ===============================================
              PHOTO
          =============================================== */}

          <div
            className="
              relative
              aspect-[3/4]
              w-full
              overflow-hidden
              rounded-[1rem]

              border
              border-white/10
              bg-zinc-900

              transition-colors
              duration-500

              dark:border-black/10
              dark:bg-zinc-100
            "
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="
                (max-width: 640px) 240px,
                256px
              "
              className="
                object-cover
                object-center
              "
            />

            {/* Sombra interna */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-transparent
              "
            />

            {/* Borda azul/amarela */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                rounded-[1rem]
                ring-1
                ring-inset
                ring-blue-400/20
                dark:ring-blue-600/15
              "
            />
          </div>

          {/* ===============================================
              BOTTOM DETAIL
          =============================================== */}

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-2.5
              flex
              items-center
              justify-center
              gap-1.5
            "
          >
            <span
              className="
                h-1
                w-6
                rounded-full
                bg-blue-500

                transition-colors
                duration-500

                dark:bg-blue-600
              "
            />

            <span
              className="
                h-1
                w-2
                rounded-full
                bg-yellow-400

                transition-colors
                duration-500

                dark:bg-yellow-500
              "
            />

            <span
              className="
                h-1
                w-6
                rounded-full
                bg-blue-500

                transition-colors
                duration-500

                dark:bg-blue-600
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HangingIdCard;