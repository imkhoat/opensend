import React from "react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  isLoading: boolean;
  error?: Error;
  children: React.ReactNode;
  onRetry?: (params?: Record<string, any>) => void;
};

const ErrorBoundary: React.FC<Props> = ({ isLoading, error, children, onRetry }) => {
  if (isLoading) {
    return (
      <Card className="p-4 h-full w-full">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <p>Error: {error?.message || "Something went wrong"}</p>
        {onRetry && (
          <Button onClick={onRetry} className="mt-2">
            Retry
          </Button>
        )}
      </Alert>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;