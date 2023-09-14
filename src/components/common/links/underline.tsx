import React from "react"

type Props = {
  children?: React.ReactNode,
  className?: string,
  wrapClassName?: string,
  text?: string,
  href: string
}

export default function UnderlineLink({
  children,
  className,
  wrapClassName,
  text = 'Go home',
  href
}: Props) {
  return (
    <div className={wrapClassName}>
      <a
        className={`underline hover:text-blue-500 hover:no-underline${className && ` ${className}`}`}
        href={href}
      >{text}{children}</a>
    </div>
  )
}
