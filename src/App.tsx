import react,{ useState } from 'react';
import Header from './components/Header';
import { Note } from'./Models/note.model';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';



function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);



  return (
    <>
     
     <Header/>
     <Container className='mt-5'>
      <Row>
        <Col>
          <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
     </Container>
     
     <Container className='mt-5'>
      <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
     </Container>
    </>
  );
}

export default App;

