'use client'

import { User } from 'lucide-react'
import { useMemo } from 'react'
import { useFileInput } from './Root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files.length) return null

    const file = files[0]
    return URL.createObjectURL(file)
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex w-16 h-16 items-center justify-center rounded-full bg-violet-50 dark:bg-zinc-800">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt="Preview"
        className="w-16 h-16 rounded-full object-cover dark:bg-zinc-800"
      />
    )
  }
}
