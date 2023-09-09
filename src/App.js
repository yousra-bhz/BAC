import { useState } from 'react';
import './App.css';

function App() {
  const [fil , setFil] = useState('');
  const [math , setMath] = useState(0);
  const [phy , setPhy] = useState(0);
  const [svt , setSvt] = useState(0);
  const [fr , setFr] = useState(0);
  const [arab , setArab] = useState(0);
  const [eng , setEng] = useState(0);
  const [hisGeo , setHisGeo]  = useState(0);
  const [Islam , setIslam] = useState(0);
  const [phylo , setPhylo] = useState(0);
  const [sport , setSport] = useState(0);
  const [total , setTotal]  = useState(0);
  const [moyenne , setMoyenne] = useState(0);
  const [result , setResult] = useState('');

  function MoyenneBac() {
    let newTotal = 0;
    if (fil === 'mathematiques') {
      newTotal =
        parseFloat(math) * 7 +
        parseFloat(phy) * 6 +
        parseFloat(svt) * 2 +
        parseFloat(arab) * 3 +
        parseFloat(fr) * 2 +
        parseFloat(eng) * 2 +
        parseFloat(hisGeo) * 2 +
        parseFloat(phylo) * 2 +
        parseFloat(Islam) * 2 +
        parseFloat(sport);
    } else if (fil === 'scientifique') {
      newTotal =
        parseFloat(svt) * 6 +
        parseFloat(math) * 5 +
        parseFloat(phy) * 4 +
        parseFloat(arab) * 3 +
        parseFloat(fr) * 2 +
        parseFloat(eng) * 2 +
        parseFloat(Islam) * 2 +
        parseFloat(phylo) * 2 +
        parseFloat(hisGeo) * 2 +
        parseFloat(sport);
    }
  
    const newMoyenne = newTotal / 29;
    setTotal(newTotal);
    setMoyenne(newMoyenne);
  
    // Now you can use newMoyenne in your switch statement
    switch (true) {
      case newMoyenne < 10:
        setResult('failed');
        break;
      case newMoyenne >= 10 && newMoyenne < 15:
        setResult('Encouragement');
        break;
      case newMoyenne >= 15 && newMoyenne < 17:
        setResult('Felicitation');
        break;
      case newMoyenne >= 17 && newMoyenne <= 20:
        setResult('Eloge');
        break;
      default:
        setResult('please Try Again');
    }
  }
  

  return (
    <div className="App">
    <form>
      <div>
      <label>Entrez votre fillière </label>
    <input  placeholder='Entrez votre fillière' onChange={(event) => setFil(event.target.value)}></input>
      </div>
      <div>
    <label>Mathematiques</label>
    <input placeholder='Entrez votre note' onChange={(event) => setMath(event.target.value)}></input>
      </div>
      <div>
    <label>Physique</label>
    <input placeholder='Entrez votre note' onChange={(event) => setPhy(event.target.value)}></input>
      </div>
      <div>
    <label>Sciences de la Vie et Terre</label>
    <input placeholder='Entrez votre note' onChange={(event) => setSvt(event.target.value)}></input>
      </div>
      <div>
    <label>Histoire/Geographie</label>
    <input   placeholder='Entrez votre note'onChange={(event) => setHisGeo(event.target.value)}></input>
    </div>
    <div>
    <label>Scinces Islamiques</label>
    <input  placeholder='Entrez votre note'onChange={(event) => setIslam(event.target.value)}></input>
      </div>
      <div>
    <label>Langue Arabe</label>
    <input  placeholder='Entrez votre note'onChange={(event) => setArab(event.target.value)}></input>
      </div>
      <div>
    <label>Langue Française</label>
    <input  placeholder='Entrez votre note'onChange={(event) => setFr(event.target.value)}></input>
      </div>
      <div>
    <label>Langue Anglaise</label>
    <input  placeholder='Entrez votre note' onChange={(event) => setEng(event.target.value)}></input>
      </div>
      <div>
    <label>Phylosophie</label>
    <input  placeholder='Entrez votre note' onChange={(event) => setPhylo(event.target.value)}></input>
      </div>
      <div> 
    <label>Sport</label>
    <input  placeholder='Entrez votre note' onChange={(event) => setSport(event.target.value)}></input>
      </div>
      <button onClick={MoyenneBac}>Calculate</button>
  </form>
  
  <div className='final'>
      <h1>{moyenne} </h1>  <h1>{result} </h1>
  </div>
  
    
    </div>
  );
}

export default App;
