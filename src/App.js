import NoteCard from "./NoteCard/NoteCard";
import Layout from "./Layout/Layout";
import Page from "./components/Page/Page";
import Notelist from "./NoteLists/Notelist";
import About from "./components/about";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const arr = [
  {
      title: "First Year: Dental Anatomy - Bones Complete (4 topics)",
      img: URL,
      views: 51,
      time: 2,
      pages: 52,
      isSave: true

  },

  {
      title: "CIIPS: Triz benchmarking (Lecture 8)",
      img: URL,
      views: 29,
      time: 6,   
      pages: 5,
      isSave: true
  },
  {
    title: "JEE: Organic Chemistry - Halogens in 5 minutes",
    image: URL,
    views: null,
    time: null,
    pages: 5,
    isSave: false


  }      
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout/>}>
        <Route path="note" element={<NoteCard arr={arr}/>}></Route>
        <Route path="notelist" element={<Notelist/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Route>
      <Route path="/page" element={<Page/>}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
