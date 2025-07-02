'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-lg text-center fade-in">
            <CardHeader>
                <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit">
                    <AlertTriangle className="h-12 w-12 text-destructive" />
                </div>
                <CardTitle className="mt-4 font-headline text-2xl">Something went wrong!</CardTitle>
                <CardDescription>We've encountered an unexpected issue.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    An error has occurred and our team has been notified. Please try again, or come back later.
                </p>
                <Button
                    onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                    }
                    className="mt-6"
                >
                    Try again
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}
