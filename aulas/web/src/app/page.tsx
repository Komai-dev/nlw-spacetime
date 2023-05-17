// TypeScript + JSX = TSX //
// JSX = Java Script + XML (sintaxe do html) //

import { Button } from "@/components/button";

export default function Home() {
  return (
    <h1>
      Hello World
      <Button title="Maiko" />
      <Button title="Billy" />
      <Button title="Smith Costa" />
    </h1>
  )
}
