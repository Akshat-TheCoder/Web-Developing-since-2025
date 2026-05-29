import Navbar from "./components/Navbar"
import React, { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./components/main.css"
import { useDebugValue } from "react"

function App() {
  // let a = prompt("Enter your name")
  const [name, setname] = useState("")

  const askname = () => {
    const userName = prompt("Enter Your Name");
    if (userName === null || userName.trim() === "") {
      setname("Guest");
    } else {
      setname(userName.trim());
    }

    console.log(userName)
  }
  useEffect(() => { askname(); }, [])
    if (!name) return;

    document.title = name
    const url = new URL(window.location.href)
    url.searchParams.set("username", name)

    window.history.replaceState({}, "", url);
    console.log("searchParam : " + url.searchParams.get("username"))

    console.log("hello " + url.searchParams.get("username"))
    alert("hello " + url.searchParams.get("username"))
  }, [name])

  return (
    <>
      <Navbar username={name.trim()} />
      <main className="cardcon">
        <Card title="Akshat" desc="Boy" />
        <Card title="Raghav" desc="Boy" />
        <Card title="Riya" desc="Girl" />
      </main>
      <Footer />
    </>
  )
}

export default App
