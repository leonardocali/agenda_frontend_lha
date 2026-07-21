import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonForm";
import personService from "./services/persons";
import { showAlertUser } from "./utils/alertServices";
import '../src/css/estilos.css'
import { ResumeViewer } from "./components/ResumeViewer";

function App() {

  const [btnUpdate, setBtnUpdate] = useState(false);
  
  useEffect(() => {
    personService
    .getAll()
    .then(dataInicial => {
      setPersons(dataInicial)
      setAllPersons(dataInicial)
    });
  }, [btnUpdate]);

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("input new name");
  const [newNumber, setNewNumber] = useState("input new number");
  const [filterName, setFilterName] = useState("");
  const [allPersons, setAllPersons] = useState(persons);
  
  const [btnAdd, setBtnAdd] = useState(true);
  const [id, setId] = useState(0);

  const handleChangeAddName = (e) => {
    const valueName = e.target.value;
    if(valueName.trim() === ''){
      showAlertUser('spaceWhite')
    }
    const minus = valueName.toLowerCase();
    persons.find((val) => {
      val.name.toLowerCase() === minus &&
        showAlertUser('name')
    });
    setNewName(valueName);
  };

  const handleChangeAddPhone = (e) => {
    const valuePhone = e.target.value.replace(/\D/g,"");
    persons.find((val) => {
      val.number === valuePhone &&
        showAlertUser('phone')
    });
    setNewNumber(valuePhone);
  };

  const handleFilterName = (e) => {
    const valueFilter = e.target.value;
    const minus = valueFilter.toLowerCase();
    setFilterName(valueFilter);

    const personFilter = persons.filter((per) =>
      per.name.toLowerCase().includes(minus),
    );

    if (personFilter.length > 0 && minus !== "") {
      setPersons(personFilter);
    } else {
      personService
      .getAll()
      .then(datos => setPersons(datos))
      setFilterName('');
    }
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    
    if(newName === 'input new name' || newNumber === 'input new number' || newName === '' || newNumber === ''){
      showAlertUser('blank')
      return
    }
       
    const addPersonObj = {
      name: newName,
      number: newNumber,
    };

    personService
    .create(addPersonObj)
    .then(resp => {
      setPersons(resp)
    })
    showAlertUser('add')
    setNewNumber("input new name");
    setNewName("input new number");
  };

  const handledModifiPerson = (e) => {
    
    setId(e.target.id)
    personService
    .edit(e.target.id)
    .then(edit =>{
      setNewName(edit.name)
      setNewNumber(edit.number)
    })
    setBtnAdd(false)
    setBtnUpdate(true)
    setNewNumber("input new name");
    setNewName("input new number");
  }

  const hanledUpdatePErson = (e) =>{
    e.preventDefault()

    const objetUpdate = {
      name:newName,
      number:newNumber
    }
    
    personService
    .updatePerson(id,objetUpdate)
    .then(resp => resp.data)
    showAlertUser('update');
    
    setBtnAdd(true)
    setBtnUpdate(false)

    setNewNumber("input new name");
    setNewName("input new number");

  }

  const handleDeletePerson = async (e) =>{
    const option = await showAlertUser('deleteconfirm')
      
    if(option){
      personService
      .deleteP(e.target.id)
      .then(deleteU => setPersons(deleteU))
      showAlertUser('deleteSuccess');
      setBtnUpdate(!btnUpdate)
      setNewNumber("input new name");
      setNewName("input new number");
      setBtnUpdate(false)
    }
  }

  return (
    <>
      <div>
        <div className="title-main">
        <h1>Phonebook</h1>
        </div>
        <Filter filter={filterName} handled={handleFilterName} />
        <PersonsForm
          name={newName}
          number={newNumber}
          handledName={handleChangeAddName}
          handledNumber={handleChangeAddPhone}
          handleButtonAdd={handleAddButton}
          handleButtonUpdate={hanledUpdatePErson}
          state_btn_update={btnUpdate}
          state_btn_add={btnAdd}
        />
        <h2 className="title-main">Create by</h2>
        <ResumeViewer />
        <Persons data={persons} handledM={handledModifiPerson} handledU={handleDeletePerson}/>
      </div>
    </>
  );
}

export default App;
