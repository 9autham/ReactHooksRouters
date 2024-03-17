import React, { useState, useRef, useMemo,useCallback} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseMemoComp from "./UseMemoComp";
import UseCallBack from "./UseCallBack";


const nums=new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical: i===29_000_000
  }
})


export const Hooks = () => {
  const notify = () => {
    toast.success("Success");
  };
  let ref=useRef(0);
  let refdom=useRef();


  const onRefHandler=()=>{
    ref.current=ref.current+1;
  } 

  const onRefHandlerDom=()=>{
    refdom.current.className="text-success App mb-3";
    // refdom.current.style.color="red";
    // Dom Manuplation can be done
  }

  const [details, setDetails] = useState({
    name: "Gautham",
    age: 21,
    city: "Hyderabad",
  });
  
  const onSubmitHandler = (event) => {
    notify()
    event.preventDefault();
    setDetails({
      name: event.target.formBasicEmail.value,
      age: event.target.formBasicAge.value,
      city: event.target.formBasicCity.value,
    });
  };

  const [memocnt,setMemocnt]=useState(0);
/*const magicnumber=nums.find(item=>item.isMagical===true); // Complex Calculation will be calculated every time
  // Every time when the state is changed, the whole Hook() is re-rendered, so magicnumber is calculated again and again.*/
  const magicnumber=useMemo(() =>nums.find(item=>item.isMagical===true), [])
  // So With this the magicnumber follows memoization, Calculates once on renedering if [], else [states...] On change of them

  const useMemoHandler=()=>{
    setMemocnt(memocnt+1);
  }

  const [memovar,setMemovar]=useState("Halley's");
  const memoCompHandler=()=>{
    // The Component will "UseMemoComp" Only when the props are changes,
    // But not on each and every render
    if(memovar==="Halley's"){
      setMemovar("Comet");
    }
    else{
      setMemovar("Halley's");
    }
  }


  // The below are used for explaining the useCallBack
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  // Everytime we there is change in state {Due to count increment button}
  // The whole Hook() is re-rendered, then as disscused in the Concept.js
  // The useCall BackHandler is obsered as a prop change and its subsequent component is re-rendered
  // Uncoment the below lines and Coment the useCall Back and Observe the Changes
  // Like every time when the count button is clicked then they will re-render the component {whome we are passing "useCallBackHandler"}
  // It gets updated there in the compenent.
  // const useCallBackHandler=()=>{
  //   return count;
  // }
  const useCallBackHandler=useCallback(
    () => {
      return count;
    },
    [],
  )
  return (
    <div>
      <h1 className="text-info App mb-3" ref={refdom}>Hooks {count}</h1>
      <h2 className="text-danger App mb-3">Magical Number {magicnumber.index} useMemo clickes {memocnt} Times</h2>
      <UseMemoComp memovar={memovar} />
      {/* When ever the state is changed the props are passed again and again and re-rendered*/}
      {/* To Prevent Rerendering we use memo in the UseMemoComp */}

      <UseCallBack useCallBackHandler={useCallBackHandler}/>
      <div className="container mb-3">
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer className="blockquote-footer">
                {details.name} CountofUseRef: {ref.current} from{" "}
                <cite title="Source Title">{details.city}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3 container">
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={onRefHandler}>
            useRef
          </Button>
          {/* On clicking the useRef will change the count but will not reflect, But the value is retained in the count */}
          <Button variant="primary" onClick={onRefHandlerDom}>
            useRefDOM
          </Button>
          <Button variant="primary" onClick={useMemoHandler}>
            useMemo + {memocnt}
          </Button>
          <Button variant="light" onClick={memoCompHandler}>
            memoCompHandler
          </Button>
          <Button variant="dark" onClick={increment}>
            CountIncrement
          </Button>
        </Form>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};
