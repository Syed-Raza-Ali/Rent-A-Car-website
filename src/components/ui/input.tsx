"use client"
import * as React from "react"
import {  Search } from 'lucide-react'
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center justify-center">
      <input
      placeholder="Find out!"
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
       
      /> <button className="border rounded-md m-2 h-10 p-2" > <Search/></button></div>
    )
  }
)
Input.displayName = "Input"

export { Input }

const InputDiv = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="md:flex">
      <div className="flex items-center justify-center">
      <input
      placeholder="Input email address"
        type="email"
        className={cn(
          "flex h-10 md:w-96 w-72 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
       
      /> </div><button className="border  text-white m-2 h-12 mt-3 w-36 md:w-28" onClick={()=> {alert("Started!!")}}> Get Started</button></div>
    )
  }
)
Input.displayName = "Input"

export { InputDiv }