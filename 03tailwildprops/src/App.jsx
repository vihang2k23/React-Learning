import Card  from './components/Card'
function App() {
  let data = [{
text:"Vihang",
rollno:"100",
rank:'1'
  },{
    text:"Neel",
    rollno:"10",
    rank:'2'
      }]
  return (
    <div className="flex m-0  bg-gray-500">
     
      {data.map((e)=>{
return(<div className="m-2 flex">
  <Card data={e} />
</div>
)
      })}
     
    </div>
  );
}

export default App;
