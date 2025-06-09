"use client"
import Customise from "../../../components/modules/CustomisePage/Customise";

const CustomisePage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <main className='main customise-page-bg'>
        <Customise params={params}/>
    </main>
  )
}

export default CustomisePage