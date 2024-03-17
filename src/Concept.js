/*

React Routers

Install the package
    npm install react-router-dom

Import BrowserRouter in index.js
    import {BrowserRouter} from 'react-router-dom'
    Wrap the <App/> with the BrowserRouter
    <BrowserRouter>
        <App />
    </BrowserRouter>

Important Note:
    Keep the App.js empty everytime, and use it for routes only
    ie U can use App.js for global componets like navBars etc.
    
Import Routes and Route in the App.js 
    import { Routes, Route } from "react-router-dom";

Now Finally creating the Routes
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/*" element={<Home/>}/> This is beacause when the link is wrong it brings to home, ie when localhost:3000/aboutsss then it brings to home itself
      </Routes>


-------------------------------------------------------------------------------------------------------

React-Hooks

State Hooks : useState();
    See, you can define let a=5 and <h1>{a}</h1> Button onClick increment
    But the a value internally changes but will not refelect to the react App
    So, useState will help in Updating the state also.

    Sytax: const [variable,setVariable]=useState(0);

    If you want to change the variable you have to use: setVariable(1);


UseEffect 
    The major use of use effect is that to re-render the component after any speecfic changes
    Syntax:
    useEffect(() => {
        // Opterations you want to perform
    }, [variables])
    variables = [abc,name,class  on change of these states the useEffect will trigger]
    If [] is removed then, the page will render for every change 
    If [] is empty vector then, Page will reneder only once, at the starting the page


useRef Hook
    useRef is a React Hook that lets you reference a value that’s not needed for rendering.

    https://react.dev/reference/react/useRef has 6-7 useCases of the useRefHook
    Synatax : let ref=useRef(0); annd the ref value can be accessed by ref.current
    useRef has two application:
        1. When you have a variable like let a=0; 
            And You are incrementing the variable 'a' onClick-button, and the componet re-renders 
            and your 'a' becomes  zero again.
            These type of variables which need to maintain the previous value we use useRef. Use useRef will not undergo rendering
            Senorio where you should not useEffect
            You have a button which increments value of 'a', and displays in another component 
            in such case the 'a' will get incremented but the component will not render, and your a will not get updated on display
            but internally your 'a' is geting updated  

        2. This can be used for DOM Manuplation
            Just add the term ref={refdom} 
            let refdom=useRef();
            <h1 className="text-info App mb-3" ref={refdom}>Hooks</h1>
            const onRefHandlerDom=()=>{
                refdom.current.className="text-success App mb-3";
                // refdom.current.style.color="red";
                // Dom Manuplation can be done
            }
            <Button variant="primary" onClick={onRefHandlerDom}>
                useRefDOM
            </Button>
            Yeah!! OnClick the DOM Manuplation is done.

    Important Point is it is waste rendering {displaying} the value of useRef Coz it will not render.
    See the Documentation examples

    
useContext Hook
    See We use props for inheriting the properties. To Avoid the inheritance we use 
    See this video for better understanding, "https://youtu.be/jIbXtgL0qrg?si=P56j091EghT8TSaM"
    Not implemented here


useMemo Hook : Memoization in DP: Calculate once and use it when required   
    when any state is changed in the react application then, the whole component is rendered.
    So, To Avoid the computation we use this hook

    const nums=new Array(30_000_000).fill(0).map((_,i)=>{
        return{
            index:i,
            isMagical: i===29_000_000
        }
    })
    Gloabal Variable

    Hooks(){
        const magicnumber=nums.find(item=>item.isMagical===true);
        // All other functions and componets.....
    }
    Now When the state is changed all the Hook(){} will be re-redened will take O(29_000_000) Complex on each render
    To Avoid this type of unnessary re-renders we use useMemo hook
    // Every time when the state is changed, the whole Hook() is re-rendered, so magicnumber is calculated again and again.
    >>>>> const magicnumber=useMemo(() =>nums.find(item=>item.isMagical===true), [])
    // So With this the magicnumber follows memoization, Calculates once on renedering if [], else [states...] On change of them
    UseMemo Snippet for sytax :)
    

Memo Hook
    Now, suppose we have passed props to the component: 
    On redendering of the parent, the props are sent again and the components are re-rendered
    So, To avoid this we use the "memo"    
    Systax:
    export default memo(UseMemoComp);
    See example in the UseMemoComp.js, Onclick of the button "memoCompHandler" the component is re-rendered, 
    As the Props are Changed

{Functions can also be passed as props to a component}

useCallBack
    When the function is passed to a component, and the suppose the component will is usinf memo
    Even in such case the component will be re-rendered, this is because. 
    When there is a state change the Whole Hooks() will get re-rendered, So when it comes to a func1, it assumes that the start is changed and componet is rendered
    As in JavaScripts:
        const func1()=>{
            return "Hello";
        }
        const func2()=>{
            return "Hello";
        }

        func1===func2 will return false; // It assumes that they are not same 
            Keeping this in mind when the component executions comes {For which we are sending props} it evaluated  "func1===func2"
            And thinks that there is a prop change and the component is re-rendered
    
    To Avoid this we use useCallBack
    Use Call back Snippet
    const useCallBackHandler=useCallback(
        () => {return count;},[],)
    
    So now the prop {useCallBackHandler function is sent as prop} will on change on []
    ie the change in prop will lead to re-render of component, This will occur on []

*/