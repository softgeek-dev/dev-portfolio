'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '.'

export const SubmitButton = ({
  btnText,
  loadingText,
}: {
  btnText: string
  loadingText: string
}) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant="primary"
      className="w-[130px]"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span className="loader-indicator">{loadingText}</span>
      ) : (
        btnText
      )}
    </Button>
  )
}
