import { useSelector } from "react-redux";
import { propertyloading } from "../../../redux/slices/PropertySlice/PropertySlcie";
import LoaddingData from "./LoadingBody/LoadingData";
import DataBody from "./DataBody/DataBody";
import { useEffect } from "react";

export default function Body(){
    const loading=useSelector(propertyloading)
    useEffect(()=>{
        console.log(loading)
    })
        return loading?<LoaddingData/>:<DataBody/>
    
}