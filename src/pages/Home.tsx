import { useState } from "react";
import { Select, SelectOption } from "../components/Select";


const options = [
    {label: "first", value: 1},
    {label: "Seconde", value: 2},
    {label: "Third", value: 3},
    {label: "Fourth", value: 4},
    {label: "Fifth", value: 5}
   
]

const Home = () => {
    // const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
    const [value1, setValue1] = useState<SelectOption[]>([options[0]])
    const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
    
    return (
        <div>
            Home

            <div>
                <Select multiple options={options} value={value1} onChange={o => setValue1(o)}/>
                <br/>
                <Select options={options} value={value2} onChange={o => setValue2(o)}/>

            </div>
        </div>
    );
};

export default Home;