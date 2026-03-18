import React from 'react'
import type { InputFieldProps } from '../../types'

const baseInput =
  'w-full bg-gym-black/60 border text-off-white font-body text-base sm:text-[0.95rem] font-normal px-4 py-3.5 outline-none transition-colors duration-200 placeholder-off-white/30 rounded-none appearance-none'

const errorBorder = 'border-red-500'
const normalBorder =
  'border-white/15 focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,148,10,0.12)]'

const InputField: React.FC<InputFieldProps> = ({
  label,
  required = false,
  error,
  type = 'text',
  optional = false,
  options = [],
  rows = 5,
  id,
  ...rest
}) => {
  const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  const borderClass = error ? errorBorder : normalBorder

  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      {label && (
        <label
          htmlFor={fieldId}
          className="font-condensed text-[0.78rem] sm:text-[0.82rem] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-off-white/80"
        >
          {label}
          {required && <span className="text-gold ml-0.5">*</span>}
          {optional && (
            <span className="font-body font-normal text-[0.75rem] normal-case tracking-normal text-off-white/42 ml-1.5">
              (optional)
            </span>
          )}
        </label>
      )}

      {type === 'select' ? (
        <select
          id={fieldId}
          className={`${baseInput} ${borderClass} cursor-pointer`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9940A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem',
          }}
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="">Select a topic…</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-dark-brown">
              {opt}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={fieldId}
          rows={rows}
          className={`${baseInput} ${borderClass} resize-y min-h-[110px] sm:min-h-[130px]`}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          className={`${baseInput} ${borderClass}`}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && (
        <span className="flex items-center gap-1.5 text-[0.8rem] sm:text-[0.82rem] font-medium text-red-400">
          <span>⚠</span> {error}
        </span>
      )}
    </div>
  )
}

export default InputField