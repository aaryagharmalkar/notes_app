"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState<any[]>([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  async function fetchNotes() {
    const response = await fetch("http://localhost:3000/notes",
      {
        method: "GET",
      }
    )

    const data = await response.json()

    setNotes(data.data)
  }

  async function addNote() {
    await fetch("http://localhost:3000/notes",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title,
          desc
        })
      }

    )

    await fetchNotes()
    setTitle("")
    setDesc("")


  }

  async function delNote(index: number) {
    await fetch(`http://localhost:3000/notes/${index}`,
      {
        method: "DELETE"
      }
    )

    await fetchNotes()
  }



  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-blue-100 items-center"> {/*entire page*/}
      <h1 className="text-center font-bold text-4xl text-black">
        Notes App
      </h1>
      <div className="mt-20 max-w-xl w-full shadow-lg rounded-xl bg-gradient-to-b from-pink-100 to-pink-700 p-15 ">{/*entire card component*/}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">
            Title
          </h2>
          <input
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-white text-black"
          />

          <h2 className="text-2xl font-semibold text-black">
            Description
          </h2>
          <input
            type="text"
            placeholder="Enter Description here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 rounded-lg bg-white text-black"
          />

          
            <button
              onClick={addNote}
              className="text-2xl text-center text-black max-w-md bg-purple-500 rounded-lg">
              ADD NOTE
            </button>

        </div>

      </div>
      <div className="mt-6 w-full shadow-lg">{/*for note display*/}
          <h2 className="text-3xl text-black font-semibold">
            Notes
          </h2>
          <div className="flex gap-10 p-3">
            {notes.map((note,index)=>{
            return(
              <div 
              key={index}
              className="text-black bg-pink-300 p-5 rounded-md"
              >                         {/*for designing each note container*/}
                <h2 className="text-xl font-semibold">
                Title
              </h2>
              <p>{note.title}</p>

              <h2 className="text-xl font-semibold">
                Description
              </h2>
              <p>{note.desc}</p>

              <button 
              onClick={()=>{delNote(index)}}
              className="mt-4 w-full text-center bg-blue-300 rounded-lg">
                DELETE NOTE
              </button>
              </div>

              
            )
          })}
          </div>
          

        </div>


    </div>
  )

}