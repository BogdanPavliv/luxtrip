"use client"
// import "../customise.scss";
import CustomisePage from "../../components/templates/CustomisePage/CustomisePage";

const Customise = ({ params }: { params: Promise<{ id: string }> }) => {  
  return <CustomisePage params={params}/>
}

export default Customise;