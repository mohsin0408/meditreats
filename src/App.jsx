import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Featured from "./Featured";
import Overview from "./Overview";
import Card from "./Card";
import Accordion from "./Accordion";
import Sdata from "./Sdata";

function App(){
    return(
        <>
        <Header/>
        <Navigation/>
        <Hero/>
        <Featured/>
        <Overview/>
        <Card h1='Eligibility for Treatment'/>
        <Card h1='Preparation Before Treatment'/>
        <Card h1='About Treatment'/>
        <Card h1='Post-Treatment Care'/>
        <Card h1='Treatment Recovery Tips'/>

        {Sdata.map(({ heading, para }) => (
          <Accordion heading={heading} para={para} />
        ))}
        
        </>
    )
}

export default App
 

// {data.map (({ heading, para }) => ( <Accordion heading={heading} para={para}/> ))}

