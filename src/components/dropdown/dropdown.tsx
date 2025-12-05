"use client"

import React from "react"

import { LucideIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdownMenu"

export type DropdownOption = {
  label?: string
  icon?: LucideIcon
  onClick?: () => void
  disabled?: boolean
  inset?: boolean
  variant?: "default" | "destructive"
  /** example: { label: "More", items: [...] } */
  children?: DropdownOption[]
  separator?: boolean
}

interface AppDropdownProps {
  trigger: React.ReactNode
  items: DropdownOption[]
  className?: string
}

export const Dropdown=({ trigger, items, className }: AppDropdownProps) =>{
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={6} className={className}>
        {items.map((item, i) => {
          if (item.separator) {
            return <DropdownMenuSeparator key={i} />
          }

          // Submenu
          if (item.children) {
            return (
              <DropdownMenuSub key={i}>
                <DropdownMenuSubTrigger inset={item.inset}>
                  {item.icon && <item.icon className="size-4" />}
                  {item.label}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.children.map((sub, j) => {
                    if (sub.separator) {
                      return <DropdownMenuSeparator key={j} />
                    }
                    return (
                      <DropdownMenuItem
                        key={j}
                        onClick={sub.onClick}
                        inset={sub.inset}
                        disabled={sub.disabled}
                        variant={sub.variant}
                      >
                        {sub.icon && <sub.icon className="size-4" />}
                        {sub.label}
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          }
          return (
            <DropdownMenuItem
              key={i}
              onClick={item.onClick}
              disabled={item.disabled}
              inset={item.inset}
              variant={item.variant}
            >
              {item.icon && <item.icon className="size-4" />}
              {item.label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
