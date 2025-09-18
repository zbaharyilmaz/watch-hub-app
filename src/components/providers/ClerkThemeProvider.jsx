"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { shadesOfPurple } from "@clerk/themes";
import { useEffect, useState } from "react";

export function ClerkThemeProvider({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
        {children}
      </ClerkProvider>
    );
  }

  const clerkTheme = theme === "dark" ? "dark" : "light";

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? undefined : shadesOfPurple,
        variables: {
          colorPrimary: "#f59e0b", // amber-500
          colorBackground: theme === "dark" ? "#0a0a0a" : "#ffffff",
          colorInputBackground: theme === "dark" ? "#1f2937" : "#f9fafb",
          colorInputText: theme === "dark" ? "#ffffff" : "#111827",
          colorText: theme === "dark" ? "#ffffff" : "#111827",
          colorTextSecondary: theme === "dark" ? "#d1d5db" : "#6b7280",
          colorNeutral: theme === "dark" ? "#374151" : "#f3f4f6",
          colorSuccess: theme === "dark" ? "#10b981" : "#059669",
          colorWarning: theme === "dark" ? "#f59e0b" : "#d97706",
          colorDanger: theme === "dark" ? "#ef4444" : "#dc2626",
          borderRadius: "0.5rem",
          fontFamily: "var(--font-atma), sans-serif",
        },
        elements: {
          rootBox: {
            backgroundColor: "transparent",
            width: "100%",
          },
          card: {
            backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
            borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
            boxShadow:
              theme === "dark"
                ? "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.75rem",
            padding: "2rem",
            width: "100%",
          },
          headerTitle: {
            color: theme === "dark" ? "#ffffff" : "#111827",
            fontWeight: "600",
          },
          headerSubtitle: {
            color: theme === "dark" ? "#d1d5db" : "#6b7280",
          },
          formButtonPrimary: {
            backgroundColor: "#f59e0b",
            color: "#ffffff",
            fontWeight: "500",
            "&:hover": {
              backgroundColor: "#d97706",
            },
            "&:focus": {
              backgroundColor: "#d97706",
            },
          },
          formButtonSecondary: {
            backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
            color: theme === "dark" ? "#ffffff" : "#111827",
            borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
            "&:hover": {
              backgroundColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
            },
          },
          socialButtonsBlockButton: {
            backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
            borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
            color: theme === "dark" ? "#ffffff" : "#111827",
            "&:hover": {
              backgroundColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
            },
          },
          formFieldInput: {
            backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
            borderColor: theme === "dark" ? "#374151" : "#d1d5db",
            color: theme === "dark" ? "#ffffff" : "#111827",
            "&:focus": {
              borderColor: "#f59e0b",
              boxShadow: "0 0 0 1px #f59e0b",
            },
            "&::placeholder": {
              color: theme === "dark" ? "#9ca3af" : "#6b7280",
            },
          },
          formFieldLabel: {
            color: theme === "dark" ? "#ffffff" : "#111827",
            fontWeight: "500",
          },
          footerActionLink: {
            color: "#f59e0b",
            "&:hover": {
              color: "#d97706",
            },
          },
          identityPreviewText: {
            color: theme === "dark" ? "#ffffff" : "#111827",
          },
          identityPreviewEditButton: {
            color: "#f59e0b",
            "&:hover": {
              color: "#d97706",
            },
          },
          formFieldErrorText: {
            color: theme === "dark" ? "#ef4444" : "#dc2626",
          },
          formFieldSuccessText: {
            color: theme === "dark" ? "#10b981" : "#059669",
          },
          formFieldWarningText: {
            color: theme === "dark" ? "#f59e0b" : "#d97706",
          },
          formFieldHintText: {
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          },
          dividerLine: {
            backgroundColor: theme === "dark" ? "#374151" : "#e5e7eb",
          },
          dividerText: {
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
